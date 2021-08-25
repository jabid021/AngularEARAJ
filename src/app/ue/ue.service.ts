import { Injectable } from '@angular/core';
import {UE} from "../model/UE";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UeService {
  ues: Array<UE> = new Array<UE>();
  constructor(private http: HttpClient, private appConfigService: AppConfigService) {

  }

  findAll(): Array<UE> {
    return this.ues;
  }


  findById(id: number): UE{
    return this.ues.find(ue => ue.id == id);
  }

  create(ue: UE) {
    let max = 0;
    for (let current of this.ues) {
      if (max < current.id) {
        max = current.id;
      }
    }
    ue.id = ++max;
    ue.version = 0;

    this.ues.push(ue);
  }

  modify(ue: UE) {
    let find: boolean = false;
    for (var indice = 0; indice < this.ues.length; indice++) {
      if (this.ues[indice].id == ue.id) {
        find = true;
        break;
      }
    }
    if (find) {
      ue.version++;
      this.ues[indice] = ue;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.ues.length; indice++) {
      console.log("yeah");
      if (this.ues[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.ues.splice(indice, 1);
    }
  }
}
