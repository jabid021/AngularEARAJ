import { Component, OnInit } from '@angular/core';
import {Stagiaire} from "../model/stagiaire";
import {StagiaireService} from "./stagiaire.service";
import {Adresse} from "../model/adresse";
import {Evaluation} from "../model/evaluation";
import {EvaluationService} from "../evaluation/evaluation.service";
import {Filiere} from "../model/filiere";
import {FiliereService} from "../filiere/filiere.service";
import {StagiaireHttpService} from "./stagiaire-http.service";
import {FiliereHttpService} from "../filiere/filiere-http.service";
import {EvaluationHttpService} from "../evaluation/evaluation-http.service";
import {Formateur} from "../model/formateur";

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {
  stagiaireForm:Stagiaire=null;

  constructor(private stagService:StagiaireHttpService,private filiereService:FiliereHttpService, private  evaluationService:EvaluationHttpService) { }

  ngOnInit(): void {
  }

  list(): Array<Stagiaire> {
    return this.stagService.findAll();
  }

  listEvaluation(): Array<Evaluation> {
    return this.evaluationService.findAll();
  }

  listFiliere():Array<Filiere>{
    return this.filiereService.findAll();
}

  add() {
    this.stagiaireForm = new Stagiaire();
    this.stagiaireForm.adresse = new Adresse();
    this.stagiaireForm.evaluation = new Evaluation();
    this.stagiaireForm.filiere= new Filiere();
  }

  edit(id: number) {
    this.stagService.findById(id).subscribe(resp=>
      {
        if(!resp.evaluation){
          resp.evaluation = new Evaluation();
        }
        if(!resp.filiere){
          resp.filiere = new Filiere();
        }
        if(!resp.adresse){
          resp.adresse = new Adresse();
        }
        this.stagiaireForm=resp;
        console.log(resp);
      },
      error=>console.log(error));
  }

  save() {
    if(!this.stagiaireForm.evaluation.id){
      this.stagiaireForm.evaluation = null;
    }
    if(!this.stagiaireForm.filiere.id){
      this.stagiaireForm.filiere = null;
    }
    if (this.stagiaireForm.id) {
      this.stagService.modify(this.stagiaireForm);
    } else {
      this.stagService.create(this.stagiaireForm);
    }

    this.stagiaireForm = null;
  }

  cancel() {
    this.stagiaireForm = null;
  }

  delete(id: number) {
    this.stagService.deleteById(id).subscribe(resp => {
      this.stagService.load();
    }, error => console.log(error));
  }
}
