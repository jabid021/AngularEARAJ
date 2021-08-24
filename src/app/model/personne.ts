import {Adresse} from "./adresse";

export class Personne{
  id:number;
  version:number;
  civilite:string;
  nom:string;
  prenom:string;
  email:string;
  telephone:string;
  adr : Adresse;

  constructor(id?:number,version?:number,civilite?:string,nom?:string,prenom?:string,email?:string,telephone?:string,adr?:Adresse) {
    this.id=id;
    this.version=version;
    this.nom=nom;
    this.prenom=prenom;
    this.civilite=civilite;
    this.email=email;
    this.telephone=telephone;
    this.adr=adr;
  }
}
