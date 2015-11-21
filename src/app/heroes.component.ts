import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ServicioHeroes} from './heroe.service';
import {Heroe} from './heroe.model';
import {Routes} from './route.config';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponente {
    heroes:Heroe[];
    heroeSeleccionado:Heroe;

    constructor(private _ServicioHeroes:ServicioHeroes, private _router:Router) {
        _ServicioHeroes.consultarHeroes().then((resp) => this.heroes = resp);
    }

    verDetalle() {
        this._router.navigate(['/' + Routes.detalle.as, {id: this.heroeSeleccionado.id}]);
    }

    seleccionarHereoe(heroe:Heroe) {
        this.heroeSeleccionado = heroe;
    }
}
