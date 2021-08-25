import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
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

@Component({
  selector: 'ue',
=======
import {UE} from "../model/UE";
import {UEService} from "./ue.service";
import {Filiere} from "../model/Filiere";
import {FiliereService} from "../filiere/filiere.service";
import {Evaluation} from "../model/evaluation";


@Component({
  selector: 'app-ue',
>>>>>>> Stashed changes
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.scss']
})
export class UEComponent implements OnInit {
<<<<<<< Updated upstream
  ueForm : UE=null;
  constructor(private formateurService: FormateurServiceHTTP,private matiereService: MatiereServiceHTTP,private salleService: SalleService,private ueService: UeHttpService, private filiereService: FiliereHttpService) {
  }

=======
  ueForm:UE=null;

  constructor(private ueService:UEService,private filierService:FiliereService) { }

  ngOnInit(): void {
  }
>>>>>>> Stashed changes

  list(): any {
    return this.ueService.findAll();
  }

<<<<<<< Updated upstream
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
    });
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
=======
  listFiliere():Array<Filiere> {
    return this.filierService.findAll();

  }



  add() {
    this.ueForm = new UE();
    this.ueForm.filiere=new Filiere();

  }

  edit(id: number) {
    this.ueForm = this.ueService.findById(id);
    // = new Stagiaire(stagiare.id,stagiare.version,stagiare.civilite,stagiare.nom,stagiare.prenom,stagiare.email,stagiare.telephone,stagiare.niveauEtude, stagiare.dtNaissance,stagiare.adr);
    if (!this.ueForm.filiere) {
      this.ueForm.filiere = new Filiere();
    }

>>>>>>> Stashed changes
  }

  save() {
    if (this.ueForm.id) {
      this.ueService.modify(this.ueForm);
    } else {
      this.ueService.create(this.ueForm);
    }

    this.ueForm = null;
  }

<<<<<<< Updated upstream
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

=======
  cancel() {
    this.ueForm = null;
  }

  delete(id:number)
  {
    this.ueService.deleteById(id);
  }


>>>>>>> Stashed changes
}
