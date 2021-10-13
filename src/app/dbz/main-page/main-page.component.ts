import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number
}

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
    nombre: '',
    poder: 0
  }

  agregar() {
    
    if (this.nuevo.nombre.trim().length == 0) { return; }
    
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
    
  }
}
