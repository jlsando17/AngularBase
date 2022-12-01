import { ReturnStatement } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class Heroecomponent{
 
    nombre:string='ironman';
    edad:number=31;

    get nombreMayuscula():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre}-${this.edad}`;

    }
    cambiarNombre():void{
        this.nombre='Wolverine';
      }
      cambiarEdad():void{
        this.edad=20;
      }
}

