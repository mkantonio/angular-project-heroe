import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{
    
    constructor(){
        console.log("servicio inicializado");
    }

    private _personajes: Personaje[] = [
    {
        nombre: 'Alfa',
        poder: 200
    },
    {
        nombre: 'Beta',
        poder: 201
    }
    ]
    
    get personajes(): Personaje[] {
        return [...this._personajes];
    }
}