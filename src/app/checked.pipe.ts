import { Pipe, PipeTransform } from '@angular/core';
import {Matiere} from "./model/matiere";

@Pipe({
  name: 'checked'
})
export class CheckedPipe implements PipeTransform {

  transform(id: number, matieres :Array<Matiere>) : string {
    if(matieres==null){return "";}
    if(matieres.find((m => m.id == id))){return "checked"}
    return "";
  }

}
