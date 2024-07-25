<script>
  import { navigate } from 'svelte-routing';
  import StyledContainer from '../components/StyledContainer.svelte';
  import Footer from '../components/Footer.svelte';
  import TopBar from '../components/TopBar.svelte';

  const navigateToRegisterAsUser = () => {
    navigate('register-as-user');
  };

  const navigateToRegisterAsProfessional = () => {
    navigate('register-as-professional'); // Suponiendo que tienes una pantalla para registrar profesionales
  };
</script>

<TopBar />

<StyledContainer>
  <h1>Registrarse como</h1>
  <button on:click={navigateToRegisterAsUser}>Usuario</button>
  <button on:click={navigateToRegisterAsProfessional}>Profesional</button>
</StyledContainer>

<Footer />

<style>
  /* Estilos específicos para RegisterAs si es necesario */
</style>
