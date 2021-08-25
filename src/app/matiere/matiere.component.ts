import { Component, OnInit } from '@angular/core';
import {Matiere} from "../model/matiere";
import {MatiereService} from "./matiere.service";


@Component({
  selector: 'matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {
  matiereForm: Matiere = null;

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
  }
  list(): Array<Matiere> {
    return this.matiereService.findAll();
  }

  add() {
    this.matiereForm = new Matiere();
  }

  edit(id: number) {
    let matiere: Matiere = this.matiereService.findById(id);
    this.matiereForm = new Matiere(matiere.id, matiere.version, matiere.nom, matiere.duree);
  }

  delete(id:number)
  {
    this.matiereService.deleteById(id);
  }

  save() {
    if (this.matiereForm.id) {
      this.matiereService.modify(this.matiereForm);
    } else {
      this.matiereService.create(this.matiereForm);
    }

    this.matiereForm = null;
  }

  cancel() {
    this.matiereForm = null;
  }
}
