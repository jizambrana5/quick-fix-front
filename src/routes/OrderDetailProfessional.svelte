<script>
    import { onMount } from 'svelte';
    import { fetchOrder, acceptOrder, cancelOrder } from '../repository/orderRepository';
    import { fetchUser } from '../repository/userRepository';
    import TopBar from '../components/TopBar.svelte';
    import Footer from '../components/Footer.svelte';
    import Notification from '../components/Notification.svelte';
    import OrderStatus from '../components/OrderStatus.svelte';
    import { navigate } from 'svelte-routing';
    import { translateOrderStatus } from '../utils/statusMapping';
  
    export let id; // Obtener el ID de la ruta
  
    let order = {};
    let user = {};
    let loading = true;
    let accepting = false;
    let canceling = false;
    let error = '';
    let successMessage = '';
  
    onMount(async () => {
      try {
        order = await fetchOrder(id);
        if (order.user_id) {
          user = await fetchUser(order.user_id);
        }
        loading = false;
      } catch (err) {
        error = err.message;
        loading = false;
      }
    });
  
    const handleAcceptOrder = async () => {
      try {
        accepting = true;
        await acceptOrder(order.id);
        successMessage = 'Orden aceptada con éxito';
        setTimeout(() => {
          navigate('/professional-home');
        }, 3000); // Navegar después de mostrar el mensaje
      } catch (err) {
        error = err.message;
        accepting = false;
      }
    };
  
    const handleCancelOrder = async () => {
      try {
        canceling = true;
        await cancelOrder(order.id);
        successMessage = 'Orden cancelada con éxito';
        setTimeout(() => {
          navigate('/professional-home');
        }, 3000); // Navegar después de mostrar el mensaje
      } catch (err) {
        error = err.message;
        canceling = false;
      }
    };
  
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
          <h1 class="text-2xl font-bold mb-4 text-green-700">Detalle de Orden</h1>
          <p><strong>ID de Orden:</strong> {order.id}</p>
          <p><strong>Dirección:</strong> {order.address}</p>
          <p><strong>Departamento:</strong> {order.location.department}</p>
          <p><strong>Distrito:</strong> {order.location.district}</p>
          <p><strong>Fecha:</strong> {formatDate(order.dates.schedule_to)}</p>
          <p><strong>Descripción:</strong> {order.description}</p>
          <OrderStatus status={order.status} />
  
          {#if order.user_id}
            <h2 class="text-xl font-bold mt-4 text-green-700">Información del Usuario</h2>
            <p><strong>Nombre:</strong> {user.name} {user.last_name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Dirección:</strong> {user.address}</p>
          {/if}
  
          {#if order.status === 'pending'}
            <button 
              on:click={handleAcceptOrder}
              class="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
              disabled={accepting}
            >
              {accepting ? 'Aceptando...' : 'Aceptar Orden'}
            </button>
            <button 
              on:click={handleCancelOrder}
              class="w-full py-2 px-4 bg-red-600 text-white font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-4"
              disabled={canceling}
            >
              {canceling ? 'Cancelando...' : 'Cancelar Orden'}
            </button>
          {/if}
        </div>
      {/if}
    {/if}
  </main>
  
  {#if successMessage}
    <Notification message={successMessage} type="success" />
  {/if}
  {#if error && !loading}
    <Notification message={error} type="error" />
  {/if}
  
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
  </style>
  