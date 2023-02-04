<script>
    import { alumnos } from "../../../store/store";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    let param = $page.params.dni
    let alumno = $alumnos.find(item => item.dni === param)

    const eliminar = () => {
        let check = confirm('Seguro quiere eliminar este alumno?')

        if (check) {
            $alumnos = $alumnos.filter(item => item.dni !== param)
            
            goto('/alumnos')
        }
    }
</script>

<svelte:head>
    <title>Alumno - {alumno?.nombre}</title>
</svelte:head>

<main>
    <div class="migas_pan volver">
        <a href="/">Menu</a>
        /
        <a href="/alumnos">Lista de alumnos</a>
    </div>
    
    <h1>Alumno: {alumno?.nombre} {alumno?.apellido}</h1>
    <h2>DNI: {alumno?.dni}</h2>
    <h2>Domicilio: {alumno?.domicilio}</h2>

    <button on:click={eliminar}>Eliminar alumno</button>
</main>

<style>
    
</style>