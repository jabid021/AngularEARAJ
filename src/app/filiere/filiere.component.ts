import { Component, OnInit } from '@angular/core';
import {Filiere} from "../model/Filiere";
import {FiliereService} from "./filiere.service";
import {Evaluation} from "../model/evaluation";

@Component({
  selector: 'filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.scss']
})
export class FiliereComponent implements OnInit {
  filiereForm : Filiere =null;
  constructor(private filiereService: FiliereService) {

  }

  ngOnInit(): void {
  }


  list(): any {
    return this.filiereService.findAll();
  }

  add() {
    this.filiereForm = new Filiere();
  }

  edit(id: number) {
    let filiere : Filiere = this.filiereService.findById(id);
    this.filiereForm = new Filiere(filiere.id,filiere.version,filiere.promotion,filiere.promotion,filiere.dtDebut,filiere.duree,filiere.dispositif);
  }

  save() {
    if (this.filiereForm.id) {
      this.filiereService.modify(this.filiereForm);
    } else {
      this.filiereService.create(this.filiereForm);
    }

    this.filiereForm = null;
  }

  delete(id:number)
  {
    this.filiereService.deleteById(id);
  }

  cancel() {
    this.filiereForm = null;
  }

}
