import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input("data") nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonajes: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    
    if (this.nuevo.nombre.trim().length == 0) { return; }
    this.onNuevoPersonajes.emit(this.nuevo);
    
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
    
  }
}
