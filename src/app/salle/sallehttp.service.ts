import { Injectable } from '@angular/core';
import {Salle} from "../model/salle";
import {HttpClient} from "@angular/common/http";
import {Evaluation} from "../model/evaluation";
import {Observable} from "rxjs";
import {AppConfigService} from "../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class SallehttpService {
  salles: Array<Salle> = new Array<Salle>();

  constructor(private http: HttpClient,private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Salle> {
    return this.salles;
  }

  findById(id: number): Observable<Salle> {
    return this.http.get<Salle>(this.appConfigService.backEndUrl + "salle/" + id);
  }

  create(salle: Salle) {
    this.http.post<Salle>(this.appConfigService.backEndUrl + "salle/", salle).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(salle: Salle) {
    this.http.put<Salle>(this.appConfigService.backEndUrl + "salle/" + salle.id, salle).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "salle/" + id);
  }

  load() {
    this.http.get<Array<Salle>>(this.appConfigService.backEndUrl + "salle/").subscribe(response => {
      this.salles = response;
    }, error => console.log(error));
  }
}
