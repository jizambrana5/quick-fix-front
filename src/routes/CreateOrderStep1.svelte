<script>
    import { navigate } from 'svelte-routing';
    import { onMount } from 'svelte'; // Importar onMount desde svelte
    import TopBar from '../components/TopBar.svelte';
    import Footer from '../components/Footer.svelte';
    import CustomSelect from '../components/CustomSelect.svelte';
    import { fetchLocations } from '../repository/locationRepository';
    import { fetchProfessionalsByLocationAndProfession } from '../repository/orderRepository';

    let departments = [];
    let districts = [];
    let department = '';
    let district = '';
    let address = '';
    let profession = '';

    let professions = ["plomero", "electricista", "gasista"]; // Profesiones en minúsculas

    const loadLocations = async () => {
      try {
        const locations = await fetchLocations();
        departments = Object.keys(locations);
        districts = locations[departments[0]] || [];
      } catch (error) {
        console.error('Error loading locations:', error);
      }
    };

    const handleDepartmentChange = (newDepartment) => {
      department = newDepartment;
      district = '';
      districts = locations[department] || [];
    };

    const handleNext = () => {
      navigate(`/create-order-step2?department=${department}&district=${district}&address=${address}&profession=${profession}`);
    };

    onMount(loadLocations);
</script>

<TopBar backButton={true} showLogout={true} />
<main class="flex flex-col items-center justify-center flex-1 px-4 pt-24" style="padding-top: 6rem;">
  <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4 text-green-700">Crear Orden - Paso 1</h1>
    <form on:submit|preventDefault={handleNext} class="flex flex-col">
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
        <label for="address" class="block text-sm font-medium text-gray-700">Dirección</label>
        <input type="text" id="address" bind:value={address} required class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
      </div>
      <div class="mb-4">
        <CustomSelect
          label="Profesión"
          bind:bindValue={profession}
          options={professions}
          placeholder="Selecciona una profesión"
        />
      </div>
      <button type="submit" class="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Siguiente</button>
    </form>
  </div>
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
</style>
