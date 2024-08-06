<!-- src/components/BackButton.svelte -->
<script>
  import { navigate } from 'svelte-routing';
  
  export let color = '#000000';
  export let size = '24';

  function goBack() {
    window.history.back();
  }
</script>

<svg 
  on:click={goBack} 
  xmlns="http://www.w3.org/2000/svg" 
  width={size} 
  height={size} 
  fill={color} 
  viewBox="0 0 24 24" 
  style="cursor: pointer;">
  <path d="M15 18l-6-6 6-6"/>
</svg>

<style>
  svg {
    cursor: pointer;
  }
</style>
