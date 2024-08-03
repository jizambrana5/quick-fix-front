import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import LoginAsUser from './routes/LoginAsUser.svelte';
import LoginAsProfessional from './routes/LoginAsProfessional.svelte';
import RegisterAs from './routes/RegisterAs.svelte';
import RegisterAsUser from './routes/RegisterAsUser.svelte';
import RegisterAsProfessional from './routes/RegisterAsProfessional.svelte';
import UserHome from './routes/UserHome.svelte';
import ProfessionalHome from './routes/ProfessionalHome.svelte'
import OrderDetail from './routes/OrderDetail.svelte';
import OrderDetailProfessional from './routes/OrderDetailProfessional.svelte';
import CreateOrderStep1 from './routes/CreateOrderStep1.svelte';
import CreateOrderStep2 from './routes/CreateOrderStep2.svelte';

const routes = {
  '/': Home,
  '/login': Login,
  '/login-as-user': LoginAsUser,
  '/login-as-professional': LoginAsProfessional,
  '/register-as': RegisterAs,
  '/register-as-user': RegisterAsUser,
  '/register-as-professional': RegisterAsProfessional,
  '/user-home': UserHome,
  '/professional-home': ProfessionalHome,
  '/order/:id': OrderDetail,
  '/order-professional/:id': OrderDetailProfessional,
  '/create-order-step1': CreateOrderStep1,
  '/create-order-step2': CreateOrderStep2,
};

export default routes;