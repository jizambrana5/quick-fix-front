<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { registerProfessional } from '../repository/professionalRepository';
    import { fetchLocations } from '../repository/locationRepository';
    import StyledContainer from '../components/StyledContainer.svelte';
    import Footer from '../components/Footer.svelte';
    import TopBar from '../components/TopBar.svelte';

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

    let departments = [];
    let districts = [];
    const professions = ["Plomero", "Electricista", "Gasista"];

    const dispatch = createEventDispatcher();

    const loadLocations = async () => {
      try {
        const locations = await fetchLocations();
        departments = Object.keys(locations);
        districts = locations[departments[0]] || []; // Inicializa distritos del primer departamento
      } catch (error) {
        console.error('Error loading locations:', error);
      }
    };

    onMount(() => {
      loadLocations();
    });

    const handleDepartmentChange = (event) => {
      department = event.target.value;
      district = ''; // Reset district on department change
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
          profession,
          location: {
            department,
            district
          }
        });
        console.log('Professional registered successfully:', response);
        dispatch('success', response);
      } catch (error) {
        console.error('Error registering professional:', error);
        dispatch('error', error.message);
      }
    };
</script>

<TopBar title="Registro de Profesional" />
<StyledContainer>
    <form on:submit|preventDefault={handleSubmit} style="padding-top: 160px; padding-bottom: 10px;">
        <label>
            Username:
            <input type="text" bind:value={username} required />
        </label>
        <label>
            Name:
            <input type="text" bind:value={name} required />
        </label>
        <label>
            Last Name:
            <input type="text" bind:value={last_name} required />
        </label>
        <label>
            Phone:
            <input type="tel" bind:value={phone} required />
        </label>
        <label>
            Address:
            <input type="text" bind:value={address} required />
        </label>
        <label>
            Email:
            <input type="email" bind:value={email} required />
        </label>
        <label>
            Password:
            <input type="password" bind:value={password} required />
        </label>
        <label>
            Profession:
            <select bind:value={profession} required>
                <option value="" disabled>Select a profession</option>
                {#each professions as prof}
                    <option value={prof}>{prof}</option>
                {/each}
            </select>
        </label>
        <label>
            Department:
            <select bind:value={department} on:change={handleDepartmentChange} required>
                <option value="" disabled>Select a department</option>
                {#each departments as dep}
                    <option value={dep}>{dep}</option>
                {/each}
            </select>
        </label>
        <label>
            District:
            <select bind:value={district} required>
                <option value="" disabled>Select a district</option>
                {#each districts as dist}
                    <option value={dist}>{dist}</option>
                {/each}
            </select>
        </label>
        <button type="submit">Register</button>
    </form>
</StyledContainer>

<Footer />
