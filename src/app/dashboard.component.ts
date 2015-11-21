import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Heroe} from './heroe.model';
import {ServicioHeroes} from './heroe.service';
import {Routes} from './route.config';
import {StatusComponente, StatusChangeEvent} from "./status.component";

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  directives: [CORE_DIRECTIVES, StatusComponente]
})
export class DashboardComponente {
  heroes: Heroe[];
  ngHeroes: Heroe[] = [];

  constructor(private _ServicioHeroes: ServicioHeroes) {
    _ServicioHeroes.consultarHeroes().then((resp) => this.heroes = resp);
  }

  onChange(event: StatusChangeEvent, heroe: Heroe) {
    if (event.status) {
      this.ngHeroes.push(heroe);
    } else {
      this.ngHeroes.splice(this.ngHeroes.indexOf(heroe), 1);
    }
  }

  get ngHeroesString() {
      return this.ngHeroes.map((h) => h.nombre).join(', ');
  }
}
