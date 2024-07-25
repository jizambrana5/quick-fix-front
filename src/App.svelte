<!-- App.svelte -->

<script>
  import { Router, Route } from 'svelte-routing';
  import routes from './routes';

  console.log('Routes:', routes); // Aquí para verificar las rutas importadas
</script>

<main>
  <Router>
    <Route path="/" component={routes['/']} />
    <Route path="/login" component={routes['/login']} />
    <Route path="/register-as" component={routes['/register-as']} />
    <Route path="/register-as-user" component={routes['/register-as-user']} />
  </Router>
</main>

<style>
  /* Estilos para tu aplicación, si es necesario */
</style>
