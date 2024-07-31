<script>
  export let backButton = false;
</script>

<div class="topbar flex items-center justify-start">
  {#if backButton}
    <button on:click={() => window.history.back()} class="text-white">
      &larr; Atrás
    </button>
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
  
  .topbar button {
    background: none;
    border: none;
    color: white;
    font-size: 16px; /* Reducir tamaño de fuente */
    cursor: pointer;
  }
</style>
