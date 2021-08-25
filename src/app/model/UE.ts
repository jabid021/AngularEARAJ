<<<<<<< Updated upstream
import {Matiere} from "./matiere";
import {Formateur} from "./formateur";
import {Filiere} from "./filiere";
import {Salle} from "./salle";

export class UE
{
  id:number;
  version:number;
  code:number;
  duree:number;
  ordre:number;
  filiere:Filiere;
  formateur:Formateur;
  matiere:Matiere;
  salle:Salle;

  constructor(id?: number, version?: number, code?: number, duree?: number, ordre?: number) {
    this.id = id;
    this.version = version;
    this.code = code;
    this.duree = duree;
    this.ordre = ordre;
=======
import {Filiere} from "./Filiere";

export class UE {
  id:number;
  version:number;
  code:number;
  dtDebut:Date;
  duree:number;
  ordre:number;
  filiere:Filiere;

  constructor(id?:number,version?:number,code?:number,dtDebut?:Date,duree?:number,ordre?:number) {
    this.id=id;
    this.version=version;
    this.code=code;
    this.dtDebut=dtDebut;
    this.duree=duree;
    this.ordre=ordre;
>>>>>>> Stashed changes
  }
}
