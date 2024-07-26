<script>
  import { navigate } from 'svelte-routing';  // Importa la función navigate
  import StyledContainer from '../components/StyledContainer.svelte';
  import Footer from '../components/Footer.svelte';
  import TopBar from '../components/TopBar.svelte';

  // Función para redirigir a la vista de inicio de sesión de usuario
  const navigateToLoginAsUser = () => {
    navigate('login-as-user'); // Ruta para el inicio de sesión de usuario
  };

  // Función para redirigir a la vista de inicio de sesión de profesional
  const navigateToLoginAsProfessional = () => {
    navigate('login-as-professional'); // Ruta para el inicio de sesión de profesional
  };
</script>

<TopBar />

<StyledContainer>
  <h1>Login</h1>
  <button on:click={navigateToLoginAsUser}>Iniciar sesión como Usuario</button>
  <button on:click={navigateToLoginAsProfessional}>Iniciar sesión como Profesional</button>
</StyledContainer>

<Footer />

<style>
  /* Estilos específicos para Login si es necesario */
</style>
