import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


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

}
