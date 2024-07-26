<script>
    import { createEventDispatcher } from 'svelte';
    import { loginUser } from '../repository/userRepository';
    import StyledContainer from '../components/StyledContainer.svelte';
    import Footer from '../components/Footer.svelte';
    import TopBar from '../components/TopBar.svelte';
  
    let email = '';
    let password = '';
    const dispatch = createEventDispatcher();
  
    const handleSubmit = async () => {
      try {
        const response = await loginUser({ email, password });
        console.log('User logged in successfully:', response);
        dispatch('success', response);
      } catch (error) {
        console.error('Error logging in:', error);
        dispatch('error', error.message);
      }
    };
  </script>
  
  <TopBar title="Login de Usuario" />
  <StyledContainer paddingTop="160px" paddingBottom="10px">
      <form on:submit|preventDefault={handleSubmit}>
          <label>
              Email:
              <input type="email" bind:value={email} required />
          </label>
          <label>
              Password:
              <input type="password" bind:value={password} required />
          </label>
          <button type="submit">Login</button>
      </form>
  </StyledContainer>
  
  <Footer />
  