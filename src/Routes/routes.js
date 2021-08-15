import { lazy } from 'react';

const routes = [
  {
    path: 'home',
    component: lazy(() => import('../Components/Dashboard/Dashboard')),
    exact: true
  },
];

export default routes;