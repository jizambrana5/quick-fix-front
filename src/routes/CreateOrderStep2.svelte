<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import { getUser } from '../auth';
  import TopBar from '../components/TopBar.svelte';
  import Footer from '../components/Footer.svelte';
  import { fetchProfessionalsByLocationAndProfession, fetchOrdersByProfessionalAndDate, createOrder } from '../repository/orderRepository';
  import Notification from '../components/Notification.svelte';
  import Flatpickr from 'svelte-flatpickr';
  import 'flatpickr/dist/flatpickr.css';

  let professionals = [];
  let selectedProfessional = '';
  let selectedDate = new Date(); // Inicializa con la fecha actual
  let selectedTime = '';
  let description = '';
  let availableTimes = [];
  let loadingProfessionals = true;
  let loadingTimes = false;
  let error = '';
  let successMessage = '';
  let noProfessionalsMessage = '';

  let department, district, address, profession;

  onMount(async () => {
    const urlParams = new URLSearchParams(location.search);
    department = urlParams.get('department');
    district = urlParams.get('district');
    address = urlParams.get('address');
    profession = urlParams.get('profession').toLowerCase();

    try {
      const professionalsResponse = await fetchProfessionalsByLocationAndProfession(department, district, profession);
      professionals = Array.isArray(professionalsResponse) ? professionalsResponse : [];
      if (professionals.length === 0) {
        noProfessionalsMessage = `No tenemos ${profession} en la zona por el momento.`;
      }
      loadingProfessionals = false;
    } catch (err) {
      error = 'Error fetching professionals';
      professionals = [];
      loadingProfessionals = false;
    }
  });

  const handleDateChange = async (date) => {
    selectedDate = date; // Mantener como objeto Date
    selectedProfessional = ''; // Deselecciona el profesional al cambiar la fecha
    availableTimes = []; // Limpia los horarios disponibles al cambiar la fecha
  };

  const handleProfessionalSelection = async (professionalId) => {
    selectedProfessional = professionalId;
    availableTimes = [];
    selectedTime = '';

    if (selectedDate && selectedProfessional) {
      loadingTimes = true;
      try {
        const orders = await fetchOrdersByProfessionalAndDate(selectedProfessional, selectedDate);
        const occupiedTimes = Array.isArray(orders) ? orders.map(order => new Date(order.schedule_to).getHours()) : [];
        for (let hour = 8; hour <= 18; hour++) {
          if (!occupiedTimes.includes(hour)) {
            availableTimes.push(`${hour}:00`);
          }
        }
        loadingTimes = false;
      } catch (err) {
        error = 'Error fetching available times';
        availableTimes = [];
        loadingTimes = false;
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Los meses son 0 indexados
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const scheduleTo = `${year}-${month}-${day} ${selectedTime}`;

      await createOrder({
        user_id: getUser().id,
        professional_id: selectedProfessional,
        schedule_to: scheduleTo,
        address,
        location: {
          department,
          district
        },
        profession,
        description
      });
      successMessage = 'Orden creada con éxito';
      setTimeout(() => {
        navigate('/user-home');
      }, 3000);
    } catch (err) {
      error = 'Error creating order';
    }
  };
</script>

<TopBar backButton={true} showLogout={true} />

<main class="flex flex-col items-center justify-center flex-1 px-4 pt-24" style="padding-top: 6rem;">
  <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4 text-green-700">Crear Orden - Paso 2</h1>
    {#if loadingProfessionals}
      <p>Cargando profesionales...</p>
    {:else if error}
      <p class="text-red-500">{error}</p>
    {:else if noProfessionalsMessage}
      <p class="text-red-500">{noProfessionalsMessage}</p>
    {:else}
      <div class="flex flex-col">
        <div class="mb-4">
          <label for="date" class="block text-sm font-medium text-gray-700">Selecciona fecha:</label>
          <Flatpickr bind:value={selectedDate} options={{ dateFormat: "Y-m-d", defaultDate: new Date() }} onChange={(selectedDates) => handleDateChange(selectedDates[0])} />
        </div>
        {#if selectedDate && professionals.length > 0}
          <div class="mb-4">
            <label for="professional" class="block text-sm font-medium text-gray-700">Profesional</label>
            <ul class="professional-list">
              {#each professionals as professional}
                <li class="professional-item {selectedProfessional === professional.id ? 'selected' : ''}" on:click={() => handleProfessionalSelection(professional.id)}>
                  <p class="font-bold">{professional.name} {professional.last_name}</p>
                  <p>{professional.username}</p>
                  <p>{professional.email}</p>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
        {#if loadingTimes}
          <p>Cargando horarios disponibles...</p>
        {:else if selectedProfessional && availableTimes.length > 0}
          <div class="mb-4">
            <label for="time" class="block text-sm font-medium text-gray-700">Hora</label>
            <ul class="time-list">
              {#each availableTimes as time}
                <li class="time-item {selectedTime === time ? 'selected' : ''}" on:click={() => selectedTime = time}>{time}</li>
              {/each}
            </ul>
          </div>
        {:else if selectedProfessional && availableTimes.length === 0}
          <p>No hay horarios disponibles para este día.</p>
        {/if}
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">Descripción del Problema</label>
          <textarea id="description" bind:value={description} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
        </div>
        <button type="button" class="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" on:click={handleSubmit} disabled={!selectedProfessional || !selectedDate || !selectedTime || !description}>Crear Orden</button>
      </div>
      {#if successMessage}
        <Notification message={successMessage} type="success" />
      {/if}
    {/if}
  </div>
</main>
<Footer />

<style>
  .professional-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Hacer los cuadros más grandes y en columnas */
    gap: 1rem; /* Espacio entre los cuadros */
  }

  .professional-item {
    padding: 1rem; /* Incrementar el padding para hacer los cuadros más grandes */
    border: 2px solid #ccc; /* Bordes más gruesos */
    border-radius: 0.5rem; /* Bordes redondeados */
    background-color: #f9f9f9; /* Fondo claro */
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    text-align: left; /* Alinear el contenido a la izquierda */
  }

  .professional-item:hover {
    background-color: #f0f0f0;
  }

  .professional-item.selected {
    background-color: #e0f7fa;
    border-color: #00796b;
  }

  .professional-item p {
    margin: 0.25rem 0;
  }

  .time-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); /* Hacer los cuadros más grandes y en columnas */
    gap: 1rem; /* Espacio entre los cuadros */
  }

  .time-item {
    padding: 1rem; /* Incrementar el padding para hacer los cuadros más grandes */
    border: 2px solid #ccc; /* Bordes más gruesos */
    border-radius: 0.5rem; /* Bordes redondeados */
    background-color: #f9f9f9; /* Fondo claro */
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    text-align: center; /* Centrar el contenido */
  }

  .time-item:hover {
    background-color: #f0f0f0;
  }

  .time-item.selected {
    background-color: #e0f7fa;
    border-color: #00796b;
  }

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
