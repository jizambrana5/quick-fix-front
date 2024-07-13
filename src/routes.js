import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import RegisterAs from './routes/RegisterAs.svelte';

const routes = {
  '/': Home,
  '/login': Login,
  '/register-as': RegisterAs,
};

export default routes;