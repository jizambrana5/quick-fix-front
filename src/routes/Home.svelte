<script>
    import { navigate } from 'svelte-routing';
    import StyledContainer from '../components/StyledContainer.svelte';
    import Footer from '../components/Footer.svelte';
  
    const navigateToLogin = () => {
      navigate('login');
    };
  
    const navigateToRegister = () => {
      navigate('register-as');
    };
  </script>
  
  <StyledContainer>
    <h1>Home</h1>
    <button on:click={navigateToLogin}>Iniciar Sesión</button>
    <button on:click={navigateToRegister}>Registrarse</button>
  </StyledContainer>

  <Footer />
  
  <style>
    /* Estilos específicos para Home si es necesario */
  </style>
  