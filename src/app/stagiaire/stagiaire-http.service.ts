import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Stagiaire} from "../model/stagiaire";
=======
import {Stagiaire} from "../model/stagiaire";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Evaluation} from "../model/evaluation";
import {Observable} from "rxjs";
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class StagiaireHttpService {

<<<<<<< Updated upstream
  stagiaires: Array<Stagiaire> = new Array<Stagiaire>();
  chemin: string;
  constructor(private http : HttpClient,private appconfig:AppConfigService) {
    this.chemin = this.appconfig.backEndUrl + "stagiaire/";
=======
  stagiaires:Array<Stagiaire>=new Array<Stagiaire>();

  constructor(private http:HttpClient,private appConfigService: AppConfigService) {
>>>>>>> Stashed changes
    this.load();
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  findById(id: number): Observable<Stagiaire> {
<<<<<<< Updated upstream
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
    this.http.put<Array<Stagiaire>>(this.chemin+stagiaire.id,stagiaire).subscribe(response=>
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
=======
    return this.http.get<Stagiaire>(this.appConfigService.backEndUrl + "stagiaire/" + id);
  }

  create(stagiaire: Stagiaire) {
    this.http.post<Stagiaire>(this.appConfigService.backEndUrl + "stagiaire/", stagiaire).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(stagiaire: Stagiaire) {
    this.http.put<Stagiaire>(this.appConfigService.backEndUrl + "stagiaire/" + stagiaire.id, stagiaire).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number){
    return this.http.delete<void>(this.appConfigService.backEndUrl + "stagiaire/" + id).subscribe(resp=>{
      this.load();
    },error=>console.log(error));
  }


  load() {
    this.http.get<Array<Stagiaire>>(this.appConfigService.backEndUrl + "stagiaire/").subscribe(response => {
      this.stagiaires = response;
    }, error => console.log(error));
>>>>>>> Stashed changes
  }
}
