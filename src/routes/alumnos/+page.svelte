<script>
    import { alumnos } from "../../store/store";
    let agregar = false
    let nombre = ''
    let apellido = ''
    let dni = ''
    let domicilio = ''

    let error = ''

    const guardarAlumno = () => {
        if (nombre === '') {
            error = 'Porfavor ingrese nombre'
        } else if (apellido === '') {
            error = 'Porfavor ingrese apellido'
        } else if (dni === '') {
            error = 'Porfavor ingrese dni'
        } else if (domicilio === '') {
            error = 'Porfavor ingrese domicilio'
        } else {
            let data = {
                "nombre": nombre,
                "apellido": apellido,
                "dni": dni,
                "domicilio": domicilio,
            }
            
            $alumnos = [...$alumnos, data]

            nombre = ''
            apellido = ''
            dni = ''
            domicilio = ''
            
            agregar = false
        }        
    }

    const cancelar = () => {
        nombre = ''
        apellido = ''
        dni = ''
        domicilio = ''
        
        agregar = false
    }
</script>

<svelte:head>
    <title>Listado de alumnos</title>
</svelte:head>

<main>
    <div class="migas_pan volver">
        <a href="/">Menu</a>
    </div>
    
    {#if agregar}
        <h1>Agregar alumno</h1>

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
                <label for="dni">Ingrese su dni: </label>
                <input id="dni" type="text" bind:value={dni}>
            </div>

            <div class="input_group">
                <label for="domicilio">Ingrese su domicilio: </label>
                <input id="domicilio" type="text" bind:value={domicilio}>
            </div>
        </ul>

        {#if error}
            <p>{error}</p>
        {/if}

        <button on:click={guardarAlumno}>
            Guardar alumno
        </button>

        <button on:click={cancelar}>
            Cancelar
        </button>
    {:else}
        <h1>Alumnos inscriptos</h1>

        <ul>
            {#each $alumnos as alumno}
                <li>
                    <a href={`/alumnos/${alumno.dni}`}>
                        {alumno.nombre} {alumno.apellido}
                    </a>
                </li>
            {/each}
        </ul>

        <button on:click={() => agregar = true}>
            Agregar alumno
        </button>
    {/if}
</main>

<style>
    
</style>