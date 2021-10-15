import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  
  personajes: Personaje[] = [
    {
      nombre: 'Alfa',
      poder: 200
    },
    {
      nombre: 'Beta',
      poder: 201
    }
  ]

  nuevo: Personaje = {
    nombre: 'Zetta',
    poder: 2021
  }

  agregarNuevoPersonaje(argumento: Personaje){
    console.log("hola desde el padre");
    this.personajes.push(argumento);
  }

  constructor(private dbzService: DbzService){}

}
