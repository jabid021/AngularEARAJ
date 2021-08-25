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
export class MatiereServiceHTTP {

  matieres: Array<Matiere> = new Array<Matiere>();
  chemin:string;
  constructor(private matiereService:MatiereService,private http : HttpClient,private appconfig:AppConfigService) {
    this.load();
    this.chemin=this.appconfig.backEndUrl+"matiere/";

  }

  findAll(): Array<Matiere> {
    return this. matieres;
  }

  findById(id: number): Observable<Matiere> {
    return this.http.get<Matiere>(this.chemin + id);
  }

  create(matiere: Matiere) {
    this.http.post<Array<Matiere>>(this.chemin,matiere).subscribe(response=>
      {
        this.load();
        console.log(response);
      },
      error=>console.log(error));
  }

  modify(matiere: Matiere) {
    this.http.put<Array<Matiere>>(this.chemin+matiere.id,matiere).subscribe(response=>
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
    this.http.get<Array<Matiere>>(this.chemin).subscribe(response=>
      {
        this.matieres=response;
        console.log(response);
      },
      error=>console.log(error));
  }
}
