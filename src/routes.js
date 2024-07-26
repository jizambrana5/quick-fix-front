import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import RegisterAs from './routes/RegisterAs.svelte';
import RegisterAsUser from './routes/RegisterAsUser.svelte';
import RegisterAsProfessional from './routes/RegisterAsProfessional.svelte';

const routes = {
  '/': Home,
  '/login': Login,
  '/register-as': RegisterAs,
  '/register-as-user': RegisterAsUser,
  '/register-as-professional': RegisterAsProfessional,
};

export default routes;