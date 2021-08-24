export class Matiere{
  id : number;
  version : number;
  nom: string;
  duree : number;


  constructor(id?: number, version?: number, nom?: string, duree?: number) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.duree = duree;
  }
}
