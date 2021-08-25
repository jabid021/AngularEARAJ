import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
=======
import {Stagiaire} from "../model/stagiaire";
import {Adresse} from "../model/adresse";
>>>>>>> Stashed changes
import {UE} from "../model/UE";

@Injectable({
  providedIn: 'root'
})
<<<<<<< Updated upstream
export class UeService {
  ues: Array<UE> = new Array<UE>();
  constructor() {
    this.ues.push(new UE(1,0,1234,15,35));
    this.ues.push(new UE(1,0,4321,20,45));
    this.ues.push(new UE(1,0,4444,25,54));
  }

=======
export class UEService {
  ues:Array<UE>=new Array<UE>();
  constructor() {
    this.ues.push(new UE(1,0,1111,new Date(1997,11,12),12,4));
    this.ues.push(new UE(2,0,1211,new Date(1997,11,12),12,4));
    this.ues.push(new UE(3,0,3333,new Date(1997,11,12),12,4));

  }


>>>>>>> Stashed changes
  findAll(): Array<UE> {
    return this.ues;
  }

<<<<<<< Updated upstream

  findById(id: number): UE{
=======
  findById(id: number): UE {
>>>>>>> Stashed changes
    return this.ues.find(ue => ue.id == id);
  }

  create(ue: UE) {
    let max = 0;
    for (let current of this.ues) {
      if (max < current.id) {
        max = current.id;
      }
    }
    ue.id = ++max;
    ue.version = 0;

    this.ues.push(ue);
  }

  modify(ue: UE) {
    let find: boolean = false;
    for (var indice = 0; indice < this.ues.length; indice++) {
      if (this.ues[indice].id == ue.id) {
        find = true;
        break;
      }
    }
    if (find) {
      ue.version++;
      this.ues[indice] = ue;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.ues.length; indice++) {
<<<<<<< Updated upstream
      console.log("yeah");
=======
>>>>>>> Stashed changes
      if (this.ues[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.ues.splice(indice, 1);
    }
  }
}
