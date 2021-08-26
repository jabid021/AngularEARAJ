import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Stagiaire} from "../model/stagiaire";

@Injectable({
  providedIn: 'root'
})
export class StagiaireHttpService {

  stagiaires: Array<Stagiaire> = new Array<Stagiaire>();
  chemin: string;
  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl + "stagiaire/";
    this.load();
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  findById(id: number): Observable<Stagiaire> {
    return this.http.get<Stagiaire>(this.chemin + id);
  }

  create(stagiaire: Stagiaire) {
    this.http.post<Array<Stagiaire>>(this.chemin,stagiaire).subscribe(response=>
      {
        this.load();
        console.log(response);
      },
      error=>console.log(error));
  }

  modify(stagiaire: Stagiaire) {
    this.http.put<Array<Stagiaire>>(this.chemin+stagiaire.id, stagiaire).subscribe(response=>
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
    this.http.get<Array<Stagiaire>>(this.chemin).subscribe(response=>
      {
        this.stagiaires=response;
        console.log(response);
      },
      error=>console.log(error));
  }
}
