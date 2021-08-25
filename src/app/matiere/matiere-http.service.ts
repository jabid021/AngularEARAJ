import {Injectable} from '@angular/core';
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";
import {MatiereService} from "../matiere/matiere.service";
import {Matiere} from "../model/matiere";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceHTTP {

  formateurs: Array<Formateur> = new Array<Formateur>();

  constructor(private matiereService:MatiereService,private http : HttpClient) {
    this.load();
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  findById(id: number): Observable<Formateur> {
    return this.http.get<Formateur>("http://localhost:8080/formateur" + id);
  }

  create(formateur: Formateur) {
    this.http.post<Array<Formateur>>("http://localhost:8080/formateur",formateur).subscribe(response=>
      {
        this.load();
        console.log(response);
      },
      error=>console.log(error));
  }

  modify(formateur: Formateur) {
    this.http.put<Array<Formateur>>("http://localhost:8080/formateur/"+formateur.id,formateur).subscribe(response=>
      {
        this.load();
        console.log(response);
      },
      error=>console.log(error));
  }

  deleteById(id: number) : Observable<void> {
   return  this.http.delete<void>("http://localhost:8080/formateur/"+id);
  }


  load()
  {
    this.http.get<Array<Formateur>>("http://localhost:8080/formateur").subscribe(response=>
      {
        this.formateurs=response;
        console.log(response);
      },
      error=>console.log(error));
  }
}
