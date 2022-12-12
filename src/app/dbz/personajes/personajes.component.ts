import { Component} from '@angular/core';

import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  get personajes(){
    return this.DBZService.personajes;
  }
  constructor(private DBZService:DBZService){
  
  }

}
