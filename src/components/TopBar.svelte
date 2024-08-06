<!-- src/components/TopBar.svelte -->
<script>
  import { navigate } from 'svelte-routing';
  import BackButton from './BackButton.svelte'; // Importar el componente BackButton

  export let backButton = false;
  export let title = '';
  export let showLogout = false;

  function handleLogout() {
    localStorage.removeItem('authToken');
    navigate('/login', { replace: true });
    location.reload(); // Recargar la página para asegurarnos de que el estado se actualice
  }
</script>

<div class="topbar flex items-center justify-between">
  {#if backButton}
    <BackButton color="#FFFFFF" size="24" />
  {/if}
  <span class="title">{title}</span>
  {#if showLogout}
    <button on:click={handleLogout} class="logout-button">Cerrar Sesión</button>
  {/if}
</div>

<style>
  .topbar {
    width: 100%;
    background-color: #8db600;
    color: white;
    padding: 10px;
    text-align: left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .title {
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    font-weight: bold;
  }

  .logout-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin-left: auto;
  }
</style>
