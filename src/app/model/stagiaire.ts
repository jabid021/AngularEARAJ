import {Personne} from "./personne";
import {Adresse} from "./adresse";
import {Filiere} from "./filiere";
import {Evaluation} from "./evaluation";

export class Stagiaire extends Personne{
  dtNaissance:Date;
  niveauEtude:string;
  filiere:Filiere;
  evaluation:Evaluation;

  constructor(id?:number,version?:number,civilite?:string,nom?:string,prenom?:string,email?:string,telephone?:string,niveauEtude?:string,dtNaissance?:Date,adr?:Adresse,evaluation?:Evaluation,filiere?:Filiere) {
    super(id,version,civilite,nom,prenom,email,telephone,adr);
    this.dtNaissance=dtNaissance;
    this.niveauEtude=niveauEtude;
  }


}
