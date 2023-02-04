<script>
    import { profesor } from "../../store/store";
    let editar = false
    let nombre = ''
    let apellido = ''
    let email = ''

    const guardarDatos = () => {
        let data = {
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
        }

        $profesor = {...data}

        editar = false
    }

    const cancelarGuardado = () => {
        nombre = ''
        apellido = ''
        email = ''

        editar = false
    }
</script>

<svelte:head>
    <title>Perfil de profesor</title>
</svelte:head>

<main>
    <div class="migas_pan volver">
        <a href="/">Menu</a>
    </div>
    
    <h1>Mi perfil</h1>

    <h2>Datos personales</h2>

    <div>
        {#if editar}
            <ul>
                <div class="input_group">
                    <label for="nombre">Ingrese su nombre: </label>
                    <input id="nombre" type="text" bind:value={nombre}>
                </div>

                <div class="input_group">
                    <label for="apellido">Ingrese su apellido: </label>
                    <input id="apellido" type="text" bind:value={apellido}>
                </div>
                
                <div class="input_group">
                    <label for="email">Ingrese su email: </label>
                    <input id="email" type="text" bind:value={email}>
                </div>
            </ul>

            <button on:click={guardarDatos}>
                Guardar datos
            </button>

            <button on:click={cancelarGuardado}>
                Cancelar
            </button>
        {:else}
            <ul>
                <li>Nombre: {$profesor.nombre}</li>
                <li>Apellido: {$profesor.apellido}</li>
                <li>Email: {$profesor.email}</li>
            </ul>

            <br>

            <button on:click={() => editar = true}>
                Editar datos
            </button>
        {/if}
    </div>

</main>

<style>
    
</style>
