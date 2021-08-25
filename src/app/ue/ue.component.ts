import { Component, OnInit } from '@angular/core';
import {Filiere} from "../model/Filiere";
import {UE} from "../model/UE";
import {UeService} from "./ue.service";

@Component({
  selector: 'ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.scss']
})
export class UEComponent implements OnInit {
  ueForm : UE=null;
  constructor(private ueService: UeService) {
  }


  list(): any {
    return this.ueService.findAll();
  }

  add() {
    this.ueForm = new UE();
  }

  edit(id: number) {
    let ue : UE = this.ueService.findById(id);
    this.ueForm = new UE(ue.id,ue.version,ue.code,ue.duree,ue.ordre);
  }

  save() {
    if (this.ueForm.id) {
      this.ueService.modify(this.ueForm);
    } else {
      this.ueService.create(this.ueForm);
    }

    this.ueForm = null;
  }

  delete(id:number)
  {
    this.ueService.deleteById(id);
  }

  cancel() {
    this.ueForm = null;
  }
  ngOnInit(): void {
  }

}
