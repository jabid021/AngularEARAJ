import { Injectable } from '@angular/core';
import {Stagiaire} from "../model/stagiaire";
import {Evaluation} from "../model/evaluation";
import {Adresse} from "../model/adresse";


@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  stagiaires:Array<Stagiaire> = new Array<Stagiaire>();
  constructor() {
    this.stagiaires.push(new Stagiaire(1,0,'M','toto','leboss','toto@lebos.com','0671896817','Bac+beaucoup',new Date(1997,11,12),new Adresse("totoStreet",'complement','64600','totoCity')));
    this.stagiaires.push(new Stagiaire(2,0,'M','toto','lebosssss','toto@lebos.com','0671896817','Bac+beaucoup',new Date(1997,11,12),new Adresse("totoStreet",'complement','64600','totoCity')));
    this.stagiaires.push(new Stagiaire(3,0,'M','toto','lebossssssssss','toto@lebos.com','0671896817','Bac+beaucoup',new Date(1997,11,12),new Adresse("totoStreet",'complement','64600','totoCity')));
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  findById(id: number): Stagiaire {
    return this.stagiaires.find(stagiare => stagiare.id == id);
  }

  create(stagiare: Stagiaire) {
    let max = 0;
    for (let current of this.stagiaires) {
      if (max < current.id) {
        max = current.id;
      }
    }
    stagiare.id = ++max;
    stagiare.version = 0;

    this.stagiaires.push(stagiare);
  }

  modify(stagiare: Stagiaire) {
    let find: boolean = false;
    for (var indice = 0; indice < this.stagiaires.length; indice++) {
      if (this.stagiaires[indice].id == stagiare.id) {
        find = true;
        break;
      }
    }
    if (find) {
      stagiare.version++;
      this.stagiaires[indice] = stagiare;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.stagiaires.length; indice++) {
      if (this.stagiaires[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.stagiaires.splice(indice, 1);
    }
  }
}
