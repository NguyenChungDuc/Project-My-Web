import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Pricing from '../Pages/Pricing';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../Pages/PageNotFound';
import Homedashboard from '../Pages/Dashboard/HomeDashboard';
import PricingDashBoard from '../Pages/Dashboard/PricingDashBoard';
import { DefaultLayout, DashboardLayout } from '../Components/Layouts';
import { Fragment } from 'react';
const publicRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    layout: DefaultLayout,
  },
  {
    path: '/about',
    component: About,
    exact: true,
    layout: DefaultLayout,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
    layout: DefaultLayout,
  },
  {
    path: '/pricing',
    component: Pricing,
    exact: true,
    layout: DefaultLayout,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    layout: Fragment,
    allowAnonymous: true, // access is allowed
  },
  {
    path: '/register',
    component: Register,
    exact: true,
    layout: Fragment,
    allowAnonymous: true, // access is allowed
  },
  {
    path: '/pagenotfound',
    component: ErrorPage,
    exact: true,
    layout: Fragment,
  },
  {
    path: '/homedashboard',
    component: Homedashboard,
    exact: true,
    layout: DashboardLayout,
    role: 'admin',
  },
  {
    path: '/pricingdashboard',
    component: PricingDashBoard,
    exact: true,
    layout: DashboardLayout,
    // role: 'admin',
  },

  {
    path: '*',
    component: ErrorPage,
    exact: true,
    layout: Fragment,
    allowAnonymous: true,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
