import {Matiere} from "./matiere";
import {Formateur} from "./formateur";
import {Filiere} from "./Filiere";
import {Salle} from "./Salle";

export class UE
{
  id:number;
  version:number;
  code:number;
  duree:number;
  ordre:number;

  constructor(id?: number, version?: number, code?: number, duree?: number, ordre?: number) {
    this.id = id;
    this.version = version;
    this.code = code;
    this.duree = duree;
    this.ordre = ordre;
  }
}
