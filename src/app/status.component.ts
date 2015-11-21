import {
  Component,
  EventEmitter,
  Output,
  Input,
  CORE_DIRECTIVES
} from 'angular2/angular2';

@Component({
  selector: 'status',
  templateUrl: 'app/status.component.html',
  directives: [CORE_DIRECTIVES],
  styleUrls: ['app/status.component.css']
})
export class StatusComponente {
  estaSeleccionado: boolean;
  @Input() activo: boolean;
  @Output() change: EventEmitter;
  constructor() {
    this.change = new EventEmitter();
    this.activo = true;
    this.estaSeleccionado = false;
  }

    seleccionar() {
    if (!this.activo) return;
    this.estaSeleccionado = !this.estaSeleccionado;
    this.change.next({status: this.estaSeleccionado});
  }
}

export interface StatusChangeEvent {
  status: boolean;
}