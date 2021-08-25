<<<<<<< Updated upstream
import {Injectable} from '@angular/core';
import {Formateur} from "../model/formateur";
import {Adresse} from "../model/adresse";
import {MatiereService} from "../matiere/matiere.service";
import {Matiere} from "../model/matiere";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConfigService} from "../app-config.service";
=======
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Evaluation} from "../model/evaluation";
import {Matiere} from "../model/matiere";
import {Observable} from "rxjs";
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
<<<<<<< Updated upstream
export class MatiereServiceHTTP {

  matieres: Array<Matiere> = new Array<Matiere>();
  chemin: string;

  constructor(private http: HttpClient, private appconfig: AppConfigService) {

    this.chemin = this.appconfig.backEndUrl + "matiere/";
    this.load();
  }

  findAll(): Array<Matiere> {
    return this.matieres;
  }

  findById(id: number): Observable<Matiere> {
    return this.http.get<Matiere>(this.chemin + id);
  }

  create(matiere: Matiere) {
    this.http.post<Array<Matiere>>(this.chemin, matiere).subscribe(response => {
        this.load();
        console.log(response);
      },
      error => console.log(error));
  }

  modify(matiere: Matiere) {
    this.http.put<Array<Matiere>>(this.chemin + matiere.id, matiere).subscribe(response => {
        this.load();
        console.log(response);
      },
      error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.chemin + id);
  }


  load() {
    this.http.get<Array<Matiere>>(this.chemin).subscribe(response => {
        this.matieres = response;
        console.log(response);
      },
      error => console.log(error));
  }
=======
export class MatiereHttpService {
  matieres:Array<Matiere>=new Array<Matiere>();

  constructor(private http:HttpClient,private appConfigService:AppConfigService) {
    this.load();
  }

  findAll():Array<Matiere>{
    return this.matieres;
  }

  findById(id:number):Observable<Matiere>{
    return this.http.get<Matiere>(this.appConfigService.backEndUrl + "matiere/" + id);
  }

  create(matiere:Matiere){
    this.http.post<Matiere>(this.appConfigService.backEndUrl + "matiere/",matiere).subscribe(resp=>{
      this.load();
    },error => console.log(error));
  }
  modify(matiere: Matiere) {
    this.http.put<Matiere>(this.appConfigService.backEndUrl + "matiere/" + matiere.id, matiere).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "matiere/" + id);
  }

  load() {
    this.http.get<Array<Matiere>>(this.appConfigService.backEndUrl + "matiere/").subscribe(response => {
      this.matieres = response;
    }, error => console.log(error));
  }

>>>>>>> Stashed changes
}
