<script>
  import { onMount } from 'svelte';
  import { fetchUser, fetchUserOrders } from '../repository/userRepository';
  import TopBar from '../components/TopBar.svelte';
  import Footer from '../components/Footer.svelte';
  import { Link } from 'svelte-routing';

  let user = {};
  let orders = [];
  let loading = true;

  onMount(async () => {
    try {
      user = await fetchUser(1); // ID de usuario mockeado
      orders = await fetchUserOrders(1); // ID de usuario mockeado
      loading = false;
    } catch (error) {
      console.error('Error loading user data:', error);
      loading = false;
    }
  });
</script>

<TopBar backButton={true} />

<main class="flex flex-col items-center justify-start flex-1 px-4 pt-24" style="padding-top: 6rem;">
  {#if loading}
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
      <p>Cargando...</p>
    </div>
  {:else}
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-4">
      <h1 class="text-2xl font-bold mb-4 text-green-700">Bienvenido, {user.name} {user.last_name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <p><strong>Dirección:</strong> {user.address}</p>
    </div>

    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-4">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-green-700">Órdenes</h2>
        <Link to="/create-order" class="text-white bg-green-600 hover:bg-green-700 font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Crear Orden</Link>
      </div>
      {#if orders.length > 0}
        <ul class="mt-4">
          {#each orders as order}
            <li class="mb-2 p-2 border border-gray-200 rounded-md shadow-sm">
              <p><strong>ID de Orden:</strong> {order.id}</p>
              <p><strong>Dirección:</strong> {order.address}</p>
              <p><strong>Departamento:</strong> {order.location.department}</p>
              <p><strong>Distrito:</strong> {order.location.district}</p>
              <p><strong>Fecha:</strong> {new Date(order.dates.schedule_to).toLocaleString()}</p>
              <p><strong>Estado:</strong> {order.status}</p>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="mt-4">No tienes órdenes aún.</p>
      {/if}
    </div>
  {/if}
</main>

<Footer />

<style>
  /* Estilo personalizado para el contenedor principal */
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 6rem;
    padding-bottom: 70px;
    overflow-y: auto;
  }

  /* Estilos para el contenedor de usuario y órdenes */
  .user-info, .orders {
    width: 100%;
    max-width: 800px;
    padding: 10px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    margin-bottom: 1rem;
  }

  /* Estilo para la lista de órdenes */
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
