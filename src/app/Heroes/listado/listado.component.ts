import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'] 
})
export class ListadoComponent {
    heroes:string[]=['spiderman','wolverine','superman'];
heoreEliminado:string='';


    borrarHeroe(){
      
      this.heoreEliminado=this.heroes.shift() || '';
    }
   

}
