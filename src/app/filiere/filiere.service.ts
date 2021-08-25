import {Injectable, OnInit} from '@angular/core';
import {Filiere} from "../model/filiere";
import {FormateurService} from "../formateur/formateur.service";
import {Formateur} from "../model/formateur";

@Injectable({
  providedIn: 'root'
})
export class FiliereService implements OnInit {
  filieres: Array<Filiere> = new Array<Filiere>();
  constructor(private formateurService: FormateurService) {
    this.filieres.push(new Filiere(1,0,"Dream Team 2019","TPT1",new Date(2019,1,2, 12,34,56),15,"POEI"));
    this.filieres.push(new Filiere(2,0,"Dream Team 2020","TPT2",new Date(2020,1,2, 12,34,56),15,"POEC"));
    this.filieres.push(new Filiere(3,0,"Dream Team 2021","TPT3",new Date(2021,1,2, 12,34,56),15,"PROA"));

  }
  findAll(): Array<Filiere> {
    return this.filieres;
  }


  findById(id: number): Filiere{
    return this.filieres.find(filiere => filiere.id == id);
  }

  create(filiere: Filiere) {
    let max = 0;
    for (let current of this.filieres) {
      if (max < current.id) {
        max = current.id;
      }
    }
    filiere.id = ++max;
    filiere.version = 0;

    this.filieres.push(filiere);
  }

  modify(filiere: Filiere) {
    let find: boolean = false;
    for (var indice = 0; indice < this.filieres.length; indice++) {
      if (this.filieres[indice].id == filiere.id) {
        find = true;
        break;
      }
    }
    if (find) {
      if(filiere.formateur && filiere.formateur.id) {
          let formateur: Formateur = this.formateurService.findById( filiere.formateur.id);
          filiere.formateur = formateur;
      }
      filiere.version++;
      this.filieres[indice] = filiere;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.filieres.length; indice++) {
      console.log("yeah");
      if (this.filieres[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.filieres.splice(indice, 1);
    }
  }

  ngOnInit(): void {
  }

}
