import {Component, OnInit} from '@angular/core';
import {FormateurService} from "./formateur.service";
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";

@Component({
  selector: 'formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {

  formateurForm: Formateur = null;

  constructor(private formateurService: FormateurService) {
  }

  ngOnInit(): void {
  }

  list(): any {
    return this.formateurService.findAll();
  }

  add() {
    this.formateurForm = new Formateur();
    this.formateurForm.adr=new Adresse();
  }

  edit(id: number) {
    let formateur: Formateur = this.formateurService.findById(id);
    let adresse : Adresse = new Adresse(formateur.adr.rue,formateur.adr.complement,formateur.adr.codePostal,formateur.adr.ville);
    this.formateurForm = new Formateur(formateur.id, formateur.version, formateur.civilite, formateur.nom, formateur.prenom,formateur.email,formateur.telephone,formateur.experience,formateur.adr);
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

  cancel() {
    this.formateurForm = null;
  }
}
