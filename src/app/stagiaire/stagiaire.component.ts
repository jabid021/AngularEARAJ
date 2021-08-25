import { Component, OnInit } from '@angular/core';
import {Stagiaire} from "../model/stagiaire";
import {StagiaireService} from "./stagiaire.service";

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {
  stagiaireForm:Stagiaire=null;

  constructor(private stagService:StagiaireService) { }

  ngOnInit(): void {
  }

  list(): any {
    return this.stagService.findAll();
  }

  add() {
    this.stagiaireForm = new Stagiaire();
  }

  edit(id: number) {
    let stagiare: Stagiaire = this.stagService.findById(id);
    this.stagiaireForm = new Stagiaire(stagiare.id,stagiare.version,stagiare.civilite,stagiare.nom,stagiare.prenom,stagiare.email,stagiare.telephone,stagiare.niveauEtude, stagiare.dtNaissance,stagiare.adr);
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

}
