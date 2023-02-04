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
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :global(body) {
        background: #0a1120;
        color: #fff;
    }
    :global(a) {
        text-decoration: none;
        color: inherit;
    }
    :global(li) {
        list-style: none;
    }
    :global(main) {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
    :global(ul) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    :global(.volver) {
        position: absolute;
        top: 30px;
        left: 50px;
    }
    section {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    :global(a:hover) {
        text-decoration: underline;
    }
</style>