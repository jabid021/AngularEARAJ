import { Component, OnInit } from '@angular/core';
import {Filiere} from "../model/Filiere";
import {FiliereService} from "./filiere.service";
import {Evaluation} from "../model/evaluation";
import {FormateurService} from "../formateur/formateur.service";
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";

@Component({
  selector: 'filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.scss']
})
export class FiliereComponent implements OnInit {
  filiereForm : Filiere =null;
  constructor(private filiereService: FiliereService,private formateurService:FormateurService) {

  }

  ngOnInit(): void {
  }


  list(): any {
    return this.filiereService.findAll();
  }

  listFormateur():Array<Formateur>{
    return this.formateurService.findAll()
  }

  add() {
    this.filiereForm = new Filiere();
    this.filiereForm.formateur=new Formateur();
  }

  edit(id: number) {

    this.filiereForm = this.filiereService.findById(id);
    if (!this.filiereForm.formateur) {
      this.filiereForm.formateur= new Formateur();
    }

  }

  save() {
    console.log(this.filiereForm);
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
