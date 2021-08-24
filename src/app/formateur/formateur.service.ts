import {Injectable} from '@angular/core';
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  formateurs: Array<Formateur> = new Array<Formateur>();

  constructor() {
    let adresse : Adresse = new Adresse("6 rue rougemont","","75009","Paris");
    let adresse2 : Adresse = new Adresse("6 rue rougemont","","75009","Paris");
    let adresse3 : Adresse = new Adresse("6 rue rougemont","","75009","Paris");
    this.formateurs.push(new Formateur(1, 0, "M", "Doe", "John","john@gmail.com","0104217",2,adresse));
    this.formateurs.push(new Formateur(2, 0, "MME", "Doe", "Jane","john@gmail.com","0104217",2,adresse2));
    this.formateurs.push(new Formateur(3, 0, "MLLE", "Sultan", "Erica","john@gmail.com","0104217",2,adresse3));
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  findById(id: number): Formateur {
    return this.formateurs.find(formateur => formateur.id == id);
  }

  create(formateur: Formateur) {
    let max = 0;
    for (let current of this.formateurs) {
      if (max < current.id) {
        max = current.id;
      }
    }
    formateur.id = ++max;
    formateur.version = 0;

    this.formateurs.push(formateur);
  }

  modify(formateur: Formateur) {
    let find: boolean = false;
    for (var indice = 0; indice < this.formateurs.length; indice++) {
      if (this.formateurs[indice].id == formateur.id) {
        find = true;
        break;
      }
    }
    if (find) {
      formateur.version++;
      this.formateurs[indice] = formateur;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.formateurs.length; indice++) {
      if (this.formateurs[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.formateurs.splice(indice, 1);
    }
  }
}
