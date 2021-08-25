import { Component, OnInit } from '@angular/core';
import {Filiere} from "../model/filiere";
import {UE} from "../model/UE";
import {UeService} from "./ue.service";
import {FiliereService} from "../filiere/filiere.service";
import {FormateurService} from "../formateur/formateur.service";
import {MatiereService} from "../matiere/matiere.service";
import {SalleService} from "../salle/salle-service.service";
import {Matiere} from "../model/matiere";
import {Salle} from "../model/salle";
import {Formateur} from "../model/formateur";

@Component({
  selector: 'ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.scss']
})
export class UEComponent implements OnInit {
  ueForm : UE=null;
  constructor(private formateurService: FormateurService,private matiereService: MatiereService,private salleService: SalleService,private ueService: UeService, private filiereService: FiliereService) {
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
    let ue : UE = this.ueService.findById(id);
    this.ueForm = new UE(ue.id,ue.version,ue.code,ue.duree,ue.ordre);
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
    this.ueService.deleteById(id);
  }

  cancel() {
    this.ueForm = null;
  }
  ngOnInit(): void {
  }

}
