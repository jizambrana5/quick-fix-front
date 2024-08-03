<script>
  import TopBar from '../components/TopBar.svelte';
  import Footer from '../components/Footer.svelte';
  import { navigate } from 'svelte-routing';

  let email = '';
  let password = '';

  const handleLogin = () => {
    // Lógica de inicio de sesión
    if (email === 'jose@gmail.com') {
      navigate('/user-home');
    } else {
      alert('Credenciales incorrectas');
    }
  };
</script>

<svelte:head>
  <title>Iniciar Sesión como Usuario</title>
</svelte:head>

<TopBar backButton={true} />
<main class="flex flex-col items-center justify-center flex-1 px-4">
  <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4 text-green-700">Iniciar Sesión como Usuario</h1>
    <form on:submit|preventDefault={handleLogin} class="flex flex-col">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input type="email" id="email" bind:value={email} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input type="password" id="password" bind:value={password} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <button type="submit" class="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Iniciar Sesión</button>
    </form>
  </div>
</main>
<Footer />

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centrar verticalmente */
    align-items: center;
    padding-top: 6rem;
    padding-bottom: 70px;
    overflow-y: auto;
  }
</style>
