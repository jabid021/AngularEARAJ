import { Component, OnInit } from '@angular/core';
import {Stagiaire} from "../model/stagiaire";
import {StagiaireService} from "./stagiaire.service";
import {Adresse} from "../model/adresse";
import {Evaluation} from "../model/evaluation";
import {EvaluationService} from "../evaluation/evaluation.service";
import {Filiere} from "../model/Filiere";
import {FiliereService} from "../filiere/filiere.service";

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {
  stagiaireForm:Stagiaire=null;

  constructor(private stagService:StagiaireService,private evaluationService:EvaluationService,private filiereService:FiliereService) { }

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
    this.stagiaireForm.adr = new Adresse();
    this.stagiaireForm.evaluation = new Evaluation();
    this.stagiaireForm.filiere=new Filiere();
  }

  edit(id: number) {
    this.stagiaireForm = this.stagService.findById(id);
     //= new Stagiaire(stagiare.id,stagiare.version,stagiare.civilite,stagiare.nom,stagiare.prenom,stagiare.email,stagiare.telephone,stagiare.niveauEtude, stagiare.dtNaissance,stagiare.adr);
    if (!this.stagiaireForm.adr) {
      this.stagiaireForm.adr = new Adresse();
    }
    if (!this.stagiaireForm.evaluation) {
      this.stagiaireForm.evaluation = new Evaluation();
    }
    if (!this.stagiaireForm.filiere) {
      this.stagiaireForm.filiere = new Filiere();
    }

  }

  save() {
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

  delete(id:number)
  {
    this.stagService.deleteById(id);
  }
}
