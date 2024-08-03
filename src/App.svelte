<script>
  import { Router, Route } from 'svelte-routing';
  import routes from './routes';
  import './styles/tailwind.css'; // Importar estilos de Tailwind CSS
  import './styles/global.css';

  console.log('Routes:', routes); // Aquí para verificar las rutas importadas
</script>

<main class="min-h-screen flex flex-col">
  <Router>
    <Route path="/" component={routes['/']} />
    <Route path="/login" component={routes['/login']} />
    <Route path="/login-as-user" component={routes['/login-as-user']} />
    <Route path="/login-as-professional" component={routes['/login-as-professional']} />
    <Route path="/register-as" component={routes['/register-as']} />
    <Route path="/register-as-user" component={routes['/register-as-user']} />
    <Route path="/register-as-professional" component={routes['/register-as-professional']} />
    <Route path="/user-home" component={routes['/user-home']} />
    <Route path="/order/:id" component={routes['/order/:id']} />
    <Route path="/create-order-step1" component={routes['/create-order-step1']} />
    <Route path="/create-order-step2" component={routes['/create-order-step2']} />
  </Router>
</main>
