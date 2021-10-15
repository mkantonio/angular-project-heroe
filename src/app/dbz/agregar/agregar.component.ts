import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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

  // @Output() onNuevoPersonajes: EventEmitter<Personaje> = new EventEmitter();
  
  constructor(private dbzService: DbzService){

  }
  agregar() {
    
    if (this.nuevo.nombre.trim().length == 0) { return; }
    // this.onNuevoPersonajes.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
    
  }
}
