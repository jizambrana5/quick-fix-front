<script>
  import { onMount } from 'svelte';

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="styled-container">
  <slot></slot>
</div>

<style>
  .styled-container {
    background-color: var(--main-bg-color);
    color: var(--main-accent-color);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin-top: 4rem; /* Ajusta este valor según la altura de tu TopBar */
  }
</style>
