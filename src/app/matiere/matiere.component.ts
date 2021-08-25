import { Component, OnInit } from '@angular/core';
import {Matiere} from "../model/matiere";
<<<<<<< Updated upstream
import {MatiereServiceHTTP} from "./matiere-http.service";
=======
import {MatiereService} from "./matiere.service";
import {MatiereHttpService} from "./matiere-http.service";
>>>>>>> Stashed changes


@Component({
  selector: 'matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {

  matiereForm: Matiere = null;

<<<<<<< Updated upstream
  constructor(private matiereService: MatiereServiceHTTP) {
  }
=======
  constructor(private matiereService: MatiereHttpService) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }


  list(): any {
    return this.matiereService.findAll();
  }

  add() {
    this.matiereForm = new Matiere();
  }

  edit(id: number) {
<<<<<<< Updated upstream
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
=======
    this.matiereService.findById(id).subscribe(resp=>{
      this.matiereForm=resp;
    });

  }

  delete(id: number) {
    this.matiereService.deleteById(id).subscribe(resp => {
      this.matiereService.load();
    }, error => console.log(error));
>>>>>>> Stashed changes
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
