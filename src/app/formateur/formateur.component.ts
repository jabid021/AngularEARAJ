import {Component, OnInit} from '@angular/core';
import {FormateurService} from "./formateur.service";
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";
import {MatiereService} from "../matiere/matiere.service";
import {Matiere} from "../model/matiere";
import {FormateurServiceHTTP} from "./formateur-http.service";
import {MatiereServiceHTTP} from "../matiere/matiere-http.service";

@Component({
  selector: 'formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {

  formateurForm: Formateur = null;

  constructor(private formateurService: FormateurServiceHTTP,private matiereService:MatiereServiceHTTP) {
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
    this.formateurForm.adresse=new Adresse();
    this.formateurForm.competences=new Array<Matiere>();
  }

  edit(id: number) {
   this.formateurService.findById(id).subscribe(response=>
      {
        this.formateurForm=response;
        if(this.formateurForm.adresse==null)
        {
          this.formateurForm.adresse=new Adresse();
        }
        console.log(response);
      },
      error=>console.log(error));
  }

  delete(id:number)
  {
    this.formateurService.deleteById(id).subscribe(response=>
      {
       this.formateurService.load();
        console.log(response);
      },
      error=>console.log(error));
  }
  save() {
    if (this.formateurForm.id) {
      this.formateurService.modify(this.formateurForm);
    } else {
      this.formateurService.create(this.formateurForm);
    }

    this.formateurForm = null;
  }

  checkMatiere(matiere:Matiere,event:any)
  {
    if(event.checked) {
      this.formateurForm.competences.push(matiere);
    }
    else
    {
      this.removeMatiere(matiere.id);
    }
  }

    removeMatiere(id:number)
    {
      let find: boolean = false;
      for (var indice = 0; indice < this.formateurForm.competences.length; indice++) {
        if (this.formateurForm.competences[indice].id == id) {
          find = true;
          break;
        }
      }
      if (find) {
        this.formateurForm.competences.splice(indice, 1);
      }
    }


  cancel() {
    this.formateurForm = null;
  }
}
