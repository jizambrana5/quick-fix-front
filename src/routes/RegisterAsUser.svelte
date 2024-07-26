<script>
  import { createEventDispatcher } from 'svelte';
  import { registerProfessional } from '../repository/professionalRepository';
  import StyledContainer from '../components/StyledContainer.svelte';
  import Footer from '../components/Footer.svelte';
  import TopBar from '../components/TopBar.svelte';
  
  import '../styles/formStyles.css'; // Importa los estilos comunes
  
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
  
  const dispatch = createEventDispatcher();
  
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
  <form on:submit|preventDefault={handleSubmit} style="padding-top: 140px; padding-bottom: 10px;">
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
      <input type="text" bind:value={profession} required />
    </label>
    <label>
      Department:
      <input type="text" bind:value={department} required />
    </label>
    <label>
      District:
      <input type="text" bind:value={district} required />
    </label>
    <button type="submit">Register</button>
  </form>
</StyledContainer>
  
<Footer />
