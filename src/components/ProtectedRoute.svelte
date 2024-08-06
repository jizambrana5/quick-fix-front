<!-- src/components/ProtectedRoute.svelte -->
<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import { getToken } from '../auth';

  export let component;
  export let showLogout = false; // Añadir showLogout

  onMount(() => {
    if (!getToken()) {
      navigate('/login', { replace: true });
    }
  });
</script>

<svelte:component this={component} showLogout={showLogout} />
