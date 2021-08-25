import {Adresse} from "./adresse";

export class Personne{
  id:number;
  version:number;
  civilite:string;
  nom:string;
  prenom:string;
  email:string;
  telephone:string;
  adresse : Adresse;

  constructor(id?:number,version?:number,civilite?:string,nom?:string,prenom?:string,email?:string,telephone?:string,adresse?:Adresse) {
    this.id=id;
    this.version=version;
    this.nom=nom;
    this.prenom=prenom;
    this.civilite=civilite;
    this.email=email;
    this.telephone=telephone;
<<<<<<< Updated upstream
    this.adresse=adr;
=======
    this.adresse=adresse;
>>>>>>> Stashed changes
  }
}
