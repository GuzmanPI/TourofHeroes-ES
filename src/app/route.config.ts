import {HeroesComponente} from './heroes.component';
import {DetalleHeroeComponente} from './heroe-detalle.component';
import {DashboardComponente} from './dashboard.component';
import {RouteDefinition} from 'angular2/router';

export const Routes = {
  dashboard: {
    path: '/',
    as: 'Dashboard',
    component: DashboardComponente,
    link: ['/Dashboard']
  },
  heroes: {
    path: '/heroes',
    as: 'Heroes',
    component: HeroesComponente,
    link: ['/Heroes']
  },
  detalle: {
    path: '/detalle/:id',
    as: 'Detalle',
    component: DetalleHeroeComponente,
    link: ['/Detalle']
  }
};

export const APP_ROUTES: RouteDefinition[] =
    Object.keys(Routes).map((name) => Routes[name]);