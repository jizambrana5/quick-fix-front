<script>
  import { Router, Route } from 'svelte-routing';
  import routes from './routes'; // Asegúrate de que este archivo tenga las rutas definidas correctamente
</script>

<main>
  <Router>
    <Route path="/" component={routes['/']} />
    <Route path="/login" component={routes['/login']} />
    <Route path="/register-as" component={routes['/register-as']} />
  </Router>
</main>

<style>
  /* Estilos para tu aplicación, si es necesario */
</style>
