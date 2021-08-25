import { Component, OnInit } from '@angular/core';
import {Filiere} from "../model/filiere";
import {FiliereService} from "./filiere.service";
import {Evaluation} from "../model/evaluation";
import {FormateurService} from "../formateur/formateur.service";
import {Formateur} from "../model/formateur";
import {FiliereHttpService} from "./filiere-http.service";
import {FormateurServiceHTTP} from "../formateur/formateur-http.service";

@Component({
  selector: 'filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.scss']
})
export class FiliereComponent implements OnInit {
  filiereForm : Filiere =null;

  constructor(private filiereService: FiliereHttpService,private formateurService:FormateurServiceHTTP) {

  }

  ngOnInit(): void {
  }


  list(): Array<Filiere> {
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

    this.filiereService.findById(id).subscribe(resp => {
      this.filiereForm = resp;
    })
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
    this.filiereService.deleteById(id).subscribe(resp => {
      this.filiereService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.filiereForm = null;
  }

}
