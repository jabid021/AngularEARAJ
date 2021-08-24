import { Injectable } from '@angular/core';
import {Matiere} from "../model/matiere";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  matieres: Array<Matiere> = new Array<Matiere>();

  constructor() {
    this.matieres.push(new Matiere(1,0,"SPRING",5));
    this.matieres.push(new Matiere(2,0,"JAVA",9));
    this.matieres.push(new Matiere(3,0,"ANGULAR",7));
    this.matieres.push(new Matiere(4,0,"ALGO",3));
  }
  findAll(): Array<Matiere> {
    return this.matieres;
  }

  findById(id: number): Matiere {
    return this.matieres.find(matiere => matiere.id == id);
  }

  create(matiere: Matiere) {
    let max = 0;
    for (let current of this.matieres) {
      if (max < current.id) {
        max = current.id;
      }
    }
    matiere.id = ++max;
    matiere.version = 0;

    this.matieres.push(matiere);
  }

  modify(matiere: Matiere) {
    let find: boolean = false;
    for (var indice = 0; indice < this.matieres.length; indice++) {
      if (this.matieres[indice].id == matiere.id) {
        find = true;
        break;
      }
    }
    if (find) {
      matiere.version++;
      this.matieres[indice] = matiere;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.matieres.length; indice++) {
      if (this.matieres[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.matieres.splice(indice, 1);
    }
  }
}
