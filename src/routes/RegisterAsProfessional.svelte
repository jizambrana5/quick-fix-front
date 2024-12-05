<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { registerProfessional, fetchLocations } from '../repository/locationRepository';
  import TopBar from '../components/TopBar.svelte';
  import Footer from '../components/Footer.svelte';
  import CustomSelect from '../components/CustomSelect.svelte';
  import Notification from '../components/Notification.svelte';
  import { navigate } from 'svelte-routing';

  let username = '';
  let name = '';
  let last_name = '';
  let phone = '';
  let address = '';
  let email = '';
  let password = '';
  let profession = '';
  let department = '';
  let district = '';
  let registration_number = '';

  let departments = [];
  let districts = [];
  //const professions = ["plomero", "electricista", "gasista"];
  const professions = ["limpieza"];

  let successMessage = '';
  let errorMessage = '';

  const dispatch = createEventDispatcher();
  let locations = {}; // Definir locations globalmente

  onMount(async () => {
    try {
      locations = await fetchLocations(); // Asignar a la variable global
      departments = Object.keys(locations);
      // Inicializar con el primer departamento y sus distritos
      if (departments.length > 0) {
        department = departments[0];
        districts = locations[department] || [];
      }
    } catch (error) {
      console.error('Error loading locations:', error);
    }
  });

  const handleDepartmentChange = (event) => {
    department = event.detail;
    district = '';
    districts = locations[department] || [];
  };

  const handleSubmit = async () => {
    try {
      const response = await registerProfessional({
        username,
        name,
        last_name,
        phone,
        address,
        email,
        password,
        profession: "limpieza",
        location: {
          department,
          district
        },
        registration_number: "1234567890"
      });
      successMessage = 'Professional registered successfully';
      console.log('Professional registered successfully:', response);
      dispatch('success', response);
      setTimeout(() => {
        navigate('/');
      }, 3000); // Navegar después de mostrar el mensaje de éxito
    } catch (error) {
      errorMessage = error.message || 'Error registering professional';
      console.error('Error registering professional:', error);
      dispatch('error', error.message);
    }
  };
</script>

<TopBar backButton={true} />
<main class="flex flex-col items-center justify-center flex-1 px-4 pt-24" style="padding-top: 25rem;">
  <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4 text-green-700">Registro de Profesional</h1>
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input type="text" id="username" bind:value={username} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
        <input type="text" id="name" bind:value={name} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <div class="mb-4">
        <label for="last_name" class="block text-sm font-medium text-gray-700">Apellido</label>
        <input type="text" id="last_name" bind:value={last_name} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
        <input type="tel" id="phone" bind:value={phone} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input type="email" id="email" bind:value={email} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <!--
      <div class="mb-4">
        <CustomSelect
          label="Profesión"
          bind:bindValue={profession}
          options={professions}
          placeholder="Selecciona una profesión"
        />
      </div>
      <div class="mb-4">
        <label for="registration_number" class="block text-sm font-medium text-gray-700">Matrícula</label>
        <input type="text" id="registration_number" bind:value={registration_number} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      -->
      <div class="mb-4">
        <label for="address" class="block text-sm font-medium text-gray-700">Dirección</label>
        <input type="text" id="address" bind:value={address} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <div class="mb-4">
        <CustomSelect
          label="Departamento"
          bind:bindValue={department}
          options={departments}
          placeholder="Selecciona un departamento"
          on:change={handleDepartmentChange}
        />
      </div>
      <div class="mb-4">
        <CustomSelect
          label="Distrito"
          bind:bindValue={district}
          options={districts}
          placeholder="Selecciona un distrito"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input type="password" id="password" bind:value={password} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
      </div>
      <button type="submit" class="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Registrar</button>
    </form>
    {#if successMessage}
      <Notification message={successMessage} type="success" />
    {/if}
    {#if errorMessage}
      <Notification message={errorMessage} type="error" />
    {/if}
  </div>
</main>
<Footer />
