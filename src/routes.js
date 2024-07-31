import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import LoginAsUser from './routes/LoginAsUser.svelte';
import LoginAsProfessional from './routes/LoginAsProfessional.svelte';
import RegisterAs from './routes/RegisterAs.svelte';
import RegisterAsUser from './routes/RegisterAsUser.svelte';
import RegisterAsProfessional from './routes/RegisterAsProfessional.svelte';
import UserHome from './routes/UserHome.svelte';
import OrderDetail from './routes/OrderDetail.svelte';

const routes = {
  '/': Home,
  '/login': Login,
  '/login-as-user': LoginAsUser,
  '/login-as-professional': LoginAsProfessional,
  '/register-as': RegisterAs,
  '/register-as-user': RegisterAsUser,
  '/register-as-professional': RegisterAsProfessional,
  '/user-home': UserHome,
  '/order/:id': OrderDetail,
};

export default routes;