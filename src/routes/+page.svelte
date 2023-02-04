<script>
    import { profesor } from "../store/store";
</script>

<svelte:head>
    <title>Perfil de profesor</title>
</svelte:head>

<main>
    <h1>Bienvenido/a {$profesor.nombre}!</h1>

    <section>
        <a href="/perfil">Mi perfil</a>
        <a href="/alumnos">Lista de alumnos</a>
    </section>
</main>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>