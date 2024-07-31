<script>
  import { Link } from 'svelte-routing';
  import TopBar from '../components/TopBar.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
  <title>Registrarse</title>
</svelte:head>

<TopBar backButton={true} />
<main class="flex flex-col items-center justify-center flex-1 px-4">
  <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
    <h1 class="text-2xl font-bold mb-4 text-green-700">Registrarse</h1>
    <p class="mb-4 text-gray-700">Selecciona una opción para continuar</p>
    <div class="flex flex-col gap-4">
      <Link to="/register-as-user" class="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-center">Registrarse como Usuario</Link>
      <Link to="/register-as-professional" class="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-center">Registrarse como Profesional</Link>
    </div>
  </div>
</main>
<Footer />