import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import {Salle} from "../model/salle";
import {SalleService} from "./salle-service.service";
import {Adresse} from "../model/adresse";
import {SallehttpService} from "./sallehttp.service";
=======
import {Salle} from "../model/Salle";
import {Adresse} from "../model/adresse";
import {SalleHttpService} from "./salle-http.service";
>>>>>>> Stashed changes

@Component({
  selector: 'salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  salleForm: Salle = null;

<<<<<<< Updated upstream
  constructor(private salleService: SallehttpService) { }
=======
  constructor(private salleService: SalleHttpService) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

  list(): Array<Salle> {
    return this.salleService.findAll();
  }

  add() {
    this.salleForm = new Salle();
    this.salleForm.adr=new Adresse();
  }

  edit(id: number) {
<<<<<<< Updated upstream
    this.salleService.findById(id).subscribe(resp => {
      this.salleForm=resp;
    })
=======
    this.salleService.findById(id).subscribe(resp=>{
      this.salleForm=resp;
    });

>>>>>>> Stashed changes
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
