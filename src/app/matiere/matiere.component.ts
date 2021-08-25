import { Component, OnInit } from '@angular/core';
import {Matiere} from "../model/matiere";
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";
import {MatiereServiceHTTP} from "./matiere-http.service";


@Component({
  selector: 'matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {

  matiereForm: Matiere = null;

  constructor(private matiereService: MatiereServiceHTTP) {
  }

  ngOnInit(): void {
  }


  list(): any {
    return this.matiereService.findAll();
  }

  add() {
    this.matiereForm = new Matiere();
  }

  edit(id: number) {
    this.matiereService.findById(id).subscribe(response=>
      {
        this.matiereForm=response;
        console.log(response);
      },
      error=>console.log(error));
  }

  delete(id:number)
  {
    this.matiereService.deleteById(id).subscribe(response=>
      {
        this.matiereService.load();
        console.log(response);
      },
      error=>console.log(error));
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
