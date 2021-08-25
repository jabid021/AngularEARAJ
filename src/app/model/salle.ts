import {Adresse} from "./adresse";

export class Salle {
  id: number;
  nom: string;
  capacite:number;
  videoProjecteur: boolean;
  adr:Adresse;
  version:number;


  constructor(id?: number, nom?: string, capacite?: number, videoProjecteur?: boolean, adr?:Adresse, version?:number) {
    this.id = id;
    this.nom = nom;
    this.capacite = capacite;
    this.videoProjecteur = videoProjecteur;
    this.adr = adr;
    this.version = version;
  }
}
