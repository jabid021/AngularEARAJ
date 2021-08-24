import { Component, OnInit } from '@angular/core';
import {Salle} from "../model/Salle";
import {SalleService} from "./salle-service.service";
import {Adresse} from "../model/adresse";

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
    this.salleForm.adresse=new Adresse();
  }

  edit(id: number) {
    let salle: Salle = this.salleService.findById(id);
    this.salleForm = new Salle(salle.id, salle.nom, salle.capacite, salle.videoProjecteur, salle.adresse, salle.version);
  }

  delete(id:number){
    this.salleService.deleteById(id);
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
