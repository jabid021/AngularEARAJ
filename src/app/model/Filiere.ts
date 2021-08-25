export class Filiere {
  id: number;
  version: number;
  intitule:string;
  promotion:string;
  dtDebut: Date = new Date();
  duree:number;
  dispositif:string;

  constructor(id?: number, version?: number, intitule?:string,promotion?:string,dtDebut?:Date,duree?:number,dispositif?:string) {
    this.id = id;
    this.version = version;
    this.intitule=intitule;
    this.promotion=promotion;
    this.dtDebut = dtDebut;
    this.duree = duree;
    this.dispositif=dispositif;
  }
}
