import { Component, OnInit } from '@angular/core';
import {Filiere} from "../model/filiere";
import {UE} from "../model/UE";
import {SalleService} from "../salle/salle-service.service";
import {Matiere} from "../model/matiere";
import {Formateur} from "../model/formateur";
import {UeHttpService} from "./ue-http.service";
import {MatiereServiceHTTP} from "../matiere/matiere-http.service";
import {FormateurServiceHTTP} from "../formateur/formateur-http.service";
import {FiliereHttpService} from "../filiere/filiere-http.service";
import {Salle} from "../model/salle";
import {SallehttpService} from "../salle/sallehttp.service";

@Component({
  selector: 'ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.scss']
})
export class UEComponent implements OnInit {
  ueForm : UE=null;
  constructor(private formateurService: FormateurServiceHTTP,private matiereService: MatiereServiceHTTP,private salleService: SallehttpService,private ueService: UeHttpService, private filiereService: FiliereHttpService) {
  }


  list(): any {
    return this.ueService.findAll();
  }

  listFiliere(): Array<Filiere>
  {
  return this.filiereService.findAll();
  }
  listFormateur(): Array<Formateur>
  {
    return this.formateurService.findAll();
  }
  listMatiere(): Array<Matiere>
  {
    return this.matiereService.findAll();
  }
  listSalle(): Array<Salle>
  {
    return this.salleService.findAll();
  }


  add() {
    this.ueForm = new UE();
    this.ueForm.filiere=new Filiere();
    this.ueForm.formateur=new Formateur();
    this.ueForm.matiere=new Matiere();
    this.ueForm.salle=new Salle();
  }

  edit(id: number) {
    this.ueService.findById(id).subscribe(resp => {
      this.ueForm = resp;
      if(!this.ueForm.filiere)
      {
        this.ueForm.filiere=new Filiere();
      }
      if(!this.ueForm.formateur)
      {
        this.ueForm.formateur=new Formateur();
      }
      if(!this.ueForm.matiere)
      {
        this.ueForm.matiere=new Matiere();
      }
      if(!this.ueForm.salle)
      {
        this.ueForm.salle=new Salle();
      }
    });

  }

  save() {
    if (this.ueForm.id) {
      this.ueService.modify(this.ueForm);
    } else {
      this.ueService.create(this.ueForm);
    }

    this.ueForm = null;
  }

  delete(id:number)
  {
    this.ueService.deleteById(id).subscribe(resp => {
      this.ueService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.ueForm = null;
  }
  ngOnInit(): void {
  }

}
