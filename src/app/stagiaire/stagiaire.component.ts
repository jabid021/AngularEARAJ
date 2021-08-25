import { Component, OnInit } from '@angular/core';
import {Stagiaire} from "../model/stagiaire";
import {StagiaireService} from "./stagiaire.service";
import {Adresse} from "../model/adresse";
import {Evaluation} from "../model/evaluation";
<<<<<<< Updated upstream
import {EvaluationService} from "../evaluation/evaluation.service";
import {Filiere} from "../model/filiere";
import {FiliereService} from "../filiere/filiere.service";
import {StagiaireHttpService} from "./stagiaire-http.service";
=======
import {Filiere} from "../model/Filiere";
import {FiliereService} from "../filiere/filiere.service";
import {EvaluationService} from "../evaluation/evaluation.service";
import {StagiaireHttpService} from "./stagiaire-http.service";
import {EvaluationHttpService} from "../evaluation/evaluation-http.service";
import {FiliereHttpService} from "../filiere/filiere-http.service";
import {AppConfigService} from "../app-config.service";
>>>>>>> Stashed changes

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {
  stagiaireForm:Stagiaire=null;
  civilites:Array<string>=new Array<string>();

<<<<<<< Updated upstream
  constructor(private stagService:StagiaireHttpService,private filiereService:FiliereService, private  evaluationService:EvaluationService) { }
=======
  constructor(private stagService:StagiaireService) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

  list(): Array<Stagiaire> {
    return this.stagService.findAll();
  }

  add() {
    this.stagiaireForm = new Stagiaire();
    this.stagiaireForm.adresse = new Adresse();
<<<<<<< Updated upstream
    this.stagiaireForm.evaluation = new Evaluation();
    this.stagiaireForm.filiere=new Filiere();
  }

  edit(id: number) {
    this.stagService.findById(id).subscribe(response=>
      {
        this.stagiaireForm=response;
        console.log(response);
      },
      error=>console.log(error));
=======
  }

  edit(id: number) {
    let stagiare: Stagiaire = this.stagService.findById(id);
    this.stagiaireForm = new Stagiaire(stagiare.id,stagiare.version,stagiare.civilite,stagiare.nom,stagiare.prenom,stagiare.email,stagiare.telephone,stagiare.niveauEtude, stagiare.dtNaissance,stagiare.adresse);
>>>>>>> Stashed changes
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
