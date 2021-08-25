import { Component, OnInit } from '@angular/core';
import {Salle} from "../model/salle";
import {SalleService} from "./salle-service.service";
import {Adresse} from "../model/adresse";
import {SallehttpService} from "./sallehttp.service";

@Component({
  selector: 'salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  salleForm: Salle = null;

  constructor(private salleService: SallehttpService) { }

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
    this.salleService.findById(id).subscribe(resp => {
      this.salleForm=resp;
    })
  }

  delete(id:number){
    this.salleService.deleteById(id).subscribe(resp =>{
      this.salleService.load();
    }, error => console.log(error));
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
