import { Injectable } from '@angular/core';
import {Filiere} from "../model/filiere";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FiliereHttpService {

  filieres: Array<Filiere> = new Array<Filiere>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Filiere> {
    return this.filieres;
  }

  findById(id: number): Observable<Filiere> {
    return this.http.get<Filiere>(this.appConfigService.backEndUrl + "filiere/" + id);
  }

  create(filiere: Filiere) {
    this.http.post<Filiere>(this.appConfigService.backEndUrl + "filiere/", filiere).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(filiere: Filiere) {
    this.http.put<Filiere>(this.appConfigService.backEndUrl + "filiere/" + filiere.id, filiere).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "filiere/" + id);
  }

  load() {
    this.http.get<Array<Filiere>>(this.appConfigService.backEndUrl + "filiere/").subscribe(response => {
      this.filieres = response;
    }, error => console.log(error));
  }



}

