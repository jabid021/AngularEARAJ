import { Injectable } from '@angular/core';
import {Salle} from "../model/Salle";
import {Adresse} from "../model/adresse";

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  salles: Array<Salle> = new Array<Salle>();

  constructor() {
    let adresse : Adresse = new Adresse("6 rue rougemont","","75009","Paris");
    this.salles.push(new Salle(1, "Coco", 15, true, adresse, 0));
    this.salles.push(new Salle(2, "Rico", 12, true, null,0));
    this.salles.push(new Salle(3, "Condorcet", 19, false,null,0));
  }

  findAll(): Array<Salle> {
    return this.salles;
  }

  findById(id: number): Salle {
    return this.salles.find(salle => salle.id == id);
  }

  create(salle: Salle) {
    let max = 0;
    for (let current of this.salles) {
      if (max < current.id) {
        max = current.id;
      }
    }
    salle.id = ++max;
    salle.version = 0;

    this.salles.push(salle);
  }

  modify(salle: Salle) {
    let find: boolean = false;
    for (var indice = 0; indice < this.salles.length; indice++) {
      if (this.salles[indice].id == salle.id) {
        find = true;
        break;
      }
    }
    if (find) {
      salle.version++;
      this.salles[indice] = salle;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.salles.length; indice++) {
      if (this.salles[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.salles.splice(indice, 1);
    }
  }
}
