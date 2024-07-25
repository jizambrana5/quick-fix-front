<script>
  import { createEventDispatcher } from 'svelte';
  import axios from 'axios';
  import StyledContainer from '../components/StyledContainer.svelte';
  import Footer from '../components/Footer.svelte';
  import TopBar from '../components/TopBar.svelte';

  let username = '';
  let email = '';
  let password = '';
  let name = '';
  let last_name = '';
  let phone = '';
  let address = '';
  const dispatch = createEventDispatcher();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/user/', {
        username,
        email,
        password,
        name,
        last_name,
        phone,
        address
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('User registered successfully:', response.data);
      dispatch('success', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
      dispatch('error', error.response ? error.response.data : error.message);
    }
  };
</script>

<TopBar />
<StyledContainer>
  <h1>Registro de Usuario</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Username:
      <input type="text" bind:value={username} required />
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
      First Name:
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
    <button type="submit">Register</button>
  </form>
</StyledContainer>

<Footer />

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: auto;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 0.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
