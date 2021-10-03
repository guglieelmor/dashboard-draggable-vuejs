import Home from '../view/Home';
import Settings from '../view/Settings';

export const routes = [
  {
    name: 'raiz',
    path: '/',
    redirect: Home
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'settings',
    path: '/settings',
    component: Settings
  }
];
