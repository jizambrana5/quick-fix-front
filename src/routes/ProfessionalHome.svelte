<script>
    import { onMount } from 'svelte';
    import { fetchProfessional, fetchProfessionalOrders } from '../repository/professionalRepository';
    import TopBar from '../components/TopBar.svelte';
    import Footer from '../components/Footer.svelte';
    import { Link } from 'svelte-routing';
    import OrderStatus from '../components/OrderStatus.svelte';
    import { translateOrderStatus } from '../utils/statusMapping';
  
    let professional = {};
    let orders = [];
    let loading = true;
    let error = '';
  
    onMount(async () => {
      try {
        professional = await fetchProfessional(1); // ID de profesional mockeado
        orders = await fetchProfessionalOrders(1); // ID de profesional mockeado
        loading = false;
      } catch (err) {
        error = err.message;
        loading = false;
      }
    });
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours() + 3).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    };
  </script>
  
  <TopBar backButton={true} />
  
  <main class="flex flex-col items-center justify-start flex-1 px-4 pt-24" style="padding-top: 6rem;">
    {#if loading}
      <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
        <p>Cargando...</p>
      </div>
    {:else}
      {#if error}
        <div class="w-full max-w-md bg-red-100 p-6 rounded-lg shadow-md text-center text-red-700">
          <p>{error}</p>
        </div>
      {:else}
        <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-4">
          <h1 class="text-2xl font-bold mb-4 text-green-700">Bienvenido, {professional.name} {professional.last_name}</h1>
          <p><strong>Username:</strong> {professional.username}</p>
          <p><strong>Email:</strong> {professional.email}</p>
          <p><strong>Teléfono:</strong> {professional.phone}</p>
          <p><strong>Dirección:</strong> {professional.address}</p>
          <p><strong>Profesión:</strong> {professional.profession}</p>
          <p><strong>Matrícula:</strong> {professional.registration_number}</p>
        </div>
  
        <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-4">
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold text-green-700">Órdenes</h2>
          </div>
          {#if orders != null && orders.length > 0}
            <ul class="mt-4">
              {#each orders as order}
                <li class="mb-2 p-2 border border-gray-200 rounded-md shadow-sm">
                  <Link to={`/order-professional/${order.id}`} class="no-underline text-black">
                    <p><strong>ID de Orden:</strong> {order.id}</p>
                    <p><strong>Dirección:</strong> {order.address}</p>
                    <p><strong>Departamento:</strong> {order.location.department}</p>
                    <p><strong>Distrito:</strong> {order.location.district}</p>
                    <p><strong>Fecha:</strong> {formatDate(order.dates.schedule_to)}</p>
                    <p><strong>Descripción:</strong> {order.description}</p>
                    <OrderStatus status={order.status} />
                  </Link>
                </li>
              {/each}
            </ul>
          {:else}
            <p class="mt-4">No tienes órdenes aún.</p>
          {/if}
        </div>
      {/if}
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
  
    a.no-underline {
      text-decoration: none;
    }
  </style>
  