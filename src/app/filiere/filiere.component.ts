import { Component, OnInit } from '@angular/core';
import {Filiere} from "../model/filiere";
import {FiliereService} from "./filiere.service";
import {Evaluation} from "../model/evaluation";
import {FormateurService} from "../formateur/formateur.service";
import {Formateur} from "../model/formateur";
import {FiliereHttpService} from "./filiere-http.service";
import {FormateurServiceHTTP} from "../formateur/formateur-http.service";
import {UeService} from "../ue/ue.service";
import {UE} from "../model/UE";

@Component({
  selector: 'filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.scss']
})
export class FiliereComponent implements OnInit {
  filiereForm : Filiere =null;

  constructor(private filiereService: FiliereHttpService,private formateurService:FormateurServiceHTTP, private ueService:UeService) {

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
    this.filiereForm.referent=new Formateur();
  }

  edit(id: number) {
    this.filiereService.findById(id).subscribe(resp => {
      if(!resp.referent){
        resp.referent = new Formateur();
      }
      this.filiereForm = resp;
    })

  }

  save() {
    if(!this.filiereForm.referent.id){
      this.filiereForm.referent = null;
    }
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
