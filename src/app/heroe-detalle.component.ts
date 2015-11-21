import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Heroe} from './heroe.model';
import {ServicioHeroes} from './heroe.service';
import {Routes} from './route.config';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/heroe-detalle.component.html',
  styleUrls: ['app/heroe-detalle.component.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class DetalleHeroeComponente {
  heroe: Heroe;
  routes = Routes;

  constructor(private _ServicioHeroes: ServicioHeroes,
              private _routeParams: RouteParams) {

    let id = parseInt(_routeParams.get('id'), 10);

    this._ServicioHeroes.consultarHeroePorId(id)
        .then(heroe => this.heroe = heroe);
  }
}
