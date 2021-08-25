import {Component, OnInit} from '@angular/core';
import {FormateurService} from "./formateur.service";
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";
import {MatiereService} from "../matiere/matiere.service";
import {Matiere} from "../model/matiere";

@Component({
  selector: 'formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {

  formateurForm: Formateur = null;

  constructor(private formateurService: FormateurService,private matiereService:MatiereService) {
  }

  ngOnInit(): void {
  }

  listMatieres():Array<Matiere>
  {
    return this.matiereService.findAll();
  }

  list(): any {
    return this.formateurService.findAll();
  }

  add() {
    this.formateurForm = new Formateur();
    this.formateurForm.adr=new Adresse();
    this.formateurForm.matieres=new Array<Matiere>();
  }

  edit(id: number) {
    let formateur: Formateur = this.formateurService.findById(id);
    let adresse : Adresse = new Adresse(formateur.adr.rue,formateur.adr.complement,formateur.adr.codePostal,formateur.adr.ville);
    this.formateurForm = new Formateur(formateur.id, formateur.version, formateur.civilite, formateur.nom, formateur.prenom,formateur.email,formateur.telephone,formateur.experience,formateur.adr,formateur.matieres);
  }

  delete(id:number)
  {
    this.formateurService.deleteById(id);
  }
  save() {
    if (this.formateurForm.id) {
      this.formateurService.modify(this.formateurForm);
    } else {
      this.formateurService.create(this.formateurForm);
    }

    this.formateurForm = null;
  }
  checkMatiere(id:number,event:any)
  {
    if(event.checked) {
      this.formateurForm.matieres.push(this.matiereService.findById(id));
    }
    else
    {
      this.removeMatiere(id);
    }
  }



    removeMatiere(id:number)
    {
      let find: boolean = false;
      for (var indice = 0; indice < this.formateurForm.matieres.length; indice++) {
        if (this.formateurForm.matieres[indice].id == id) {
          find = true;
          break;
        }
      }
      if (find) {
        this.formateurForm.matieres.splice(indice, 1);
      }
    }


  cancel() {
    this.formateurForm = null;
  }
}
