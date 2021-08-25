import { Injectable } from '@angular/core';
import {Matiere} from "../model/matiere";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Salle} from "../model/Salle";

@Injectable({
  providedIn: 'root'
})
export class SalleHttpService {
  salles:Array<Salle>=new Array<Salle>();

  constructor(private http:HttpClient,private appConfigService:AppConfigService) {
    this.load;
  }

  findAll():Array<Salle>{
    return this.salles;

  }

  findById(id:number):Observable<Salle>{
    return this.http.get<Salle>("http://localhost:8080/salle/"+id);
  }

  create(salle:Salle){
    this.http.post(this.appConfigService.backEndUrl+"salle/",salle).subscribe(resp=>{
      this.load();
    },error => console.log());
  }

  modify(salle:Salle){
    this.http.put(this.appConfigService.backEndUrl+"salle/"+salle.id,salle).subscribe(resp=>
    {
      this.load();
    },error => console.log())
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "salle/" + id);
  }

  load(){
    this.http.get<Array<Salle>>("http://localhost:8080/salle/").subscribe(response=>{
      this.salles=response;
    },error=>console.log(error));
  }
}
