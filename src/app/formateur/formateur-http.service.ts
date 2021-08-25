import {Injectable} from '@angular/core';
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";
import {MatiereService} from "../matiere/matiere.service";
import {Matiere} from "../model/matiere";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceHTTP {

  formateurs: Array<Formateur> = new Array<Formateur>();
  chemin: string;
  constructor(private matiereService:MatiereService,private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl + "formateur/";
    this.load();
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  findById(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(this.chemin + id+"/with-matiere");
  }

  create(formateur: Formateur) {
    this.http.post<Array<Formateur>>(this.chemin,formateur).subscribe(response=>
      {
        this.load();
        console.log(response);
      },
      error=>console.log(error));
  }

  modify(formateur: Formateur) {
    this.http.put<Array<Formateur>>(this.chemin+formateur.id,formateur).subscribe(response=>
      {
        this.load();
        console.log(response);
      },
      error=>console.log(error));
  }

  deleteById(id: number) : Observable<void> {
   return  this.http.delete<void>(this.chemin+id);
  }


  load()
  {
    this.http.get<Array<Formateur>>(this.chemin).subscribe(response=>
      {
        this.formateurs=response;
        console.log(response);
      },
      error=>console.log(error));
  }
}
