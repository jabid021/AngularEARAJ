import {Personne} from "./personne";
import {Adresse} from "./adresse";

export class Formateur extends Personne  {

  constructor(id?:number,version?:number,civilite?:string,nom?:string,prenom?:string,email?:string,telephone?:string, public experience?:number,adresse?:Adresse) {
    super(id,version,civilite,nom,prenom,email,telephone,adresse);
  }
}
