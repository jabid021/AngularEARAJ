import {Personne} from "./personne";

export class Stagiaire extends Personne{
  dtNaissance:Date;
  niveauEtude:string;

  constructor(id?:number,version?:number,civilite?:string,nom?:string,prenom?:string,email?:string,telephone?:string,dtNaissance?:Date,niveauEtude:string) {
    super(id,version,civilite,nom,prenom,email,telephone);
    this.dtNaissance=dtNaissance;
    this.niveauEtude=niveauEtude;
  }
}
