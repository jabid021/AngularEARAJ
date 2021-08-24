import {Personne} from "./personne";
import {Adresse} from "./adresse";

export class Stagiaire extends Personne{
  dtNaissance:Date;
  niveauEtude:string;

  constructor(id?:number,version?:number,civilite?:string,nom?:string,prenom?:string,email?:string,telephone?:string,dtNaissance?:Date,niveauEtude?:string,adresse?:Adresse) {
    super(id,version,civilite,nom,prenom,email,telephone,adresse);
    this.dtNaissance=dtNaissance;
    this.niveauEtude=niveauEtude;
  }
}
