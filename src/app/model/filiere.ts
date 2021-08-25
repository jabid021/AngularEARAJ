import {Formateur} from "./formateur";
import {Stagiaire} from "./stagiaire";
import {UE} from "./UE";

export class Filiere {
  id: number;
  version: number;
  intitule:string;
  promotion:string;
  dtDebut: Date = new Date();
  duree:number;
  dispositif:string;
  referent:Formateur;
  stagiaires: Array<Stagiaire>;
  ues:Array<UE>;

  constructor(id?: number, version?: number, intitule?:string,promotion?:string,dtDebut?:Date,duree?:number,dispositif?:string, referent?:Formateur, stagiaires?:Array<Stagiaire>, ues?: Array<UE>) {
    this.id = id;
    this.version = version;
    this.intitule=intitule;
    this.promotion=promotion;
    this.dtDebut = dtDebut;
    this.duree = duree;
    this.dispositif=dispositif;
    this.referent = referent;
    this.stagiaires = stagiaires;
    this.ues = ues;

  }
}
