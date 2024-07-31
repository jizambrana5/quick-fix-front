<script>
  export let backButton = false;
  export let title = ''; // Si necesitas un título en el TopBar

  import BackButton from './BackButton.svelte';
</script>

<div class="topbar flex items-center justify-between">
  {#if backButton}
    <BackButton color="#FFFFFF" size="24" />
  {/if}
  <span class="title">{title}</span>
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
</style>
