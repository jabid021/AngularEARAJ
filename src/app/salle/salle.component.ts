import { Component, OnInit } from '@angular/core';
import {Salle} from "../model/Salle";
import {SalleService} from "./salle-service.service";

@Component({
  selector: 'salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  salleForm: Salle = null;

  constructor(private salleService: SalleService) { }

  ngOnInit(): void {
  }

  list(): any {
    return this.salleService.findAll();
  }

  add() {
    this.salleForm = new Salle();
  }

  edit(id: number) {
    let salle: Salle = this.salleService.findById(id);
    this.salleForm = new Salle(salle.id, salle.nom, salle.capacite, salle.videoProjecteur, salle.adresse);
  }

  save() {
    if (this.salleForm.id) {
      this.salleService.modify(this.salleForm);
    } else {
      this.salleService.create(this.salleForm);
    }

    this.salleForm = null;
  }

  cancel() {
    this.salleForm = null;
  }

}
