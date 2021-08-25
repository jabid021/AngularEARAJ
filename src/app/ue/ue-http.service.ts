import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {UE} from "../model/UE";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UeHttpService {
  ues:Array<UE> = new Array<UE>();
  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }
  findAll(): Array<UE> {
    return this.ues;
  }

  findById(id: number): Observable<UE> {
    return this.http.get<UE>(this.appConfigService.backEndUrl + "ue/" + id);
  }

  create(ue: UE) {
    this.http.post<UE>(this.appConfigService.backEndUrl + "ue/", ue).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(ue: UE) {
    this.http.put<UE>(this.appConfigService.backEndUrl + "ue/" + ue.id, ue).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "ue/" + id);
  }

  load() {
    this.http.get<Array<UE>>(this.appConfigService.backEndUrl + "ue/").subscribe(response => {
      this.ues = response;
    }, error => console.log(error));
  }
}
