import {Component, OnInit} from '@angular/core';
import {Evaluation} from "../model/evaluation";
import {EvaluationHttpService} from "./evaluation-http.service";

@Component({
  selector: 'evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  evaluationForm: Evaluation = null;

  constructor(private evaluationService: EvaluationHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Evaluation> {
    return this.evaluationService.findAll();
  }

  add() {
    this.evaluationForm = new Evaluation();
  }

  edit(id: number) {
    this.evaluationService.findById(id).subscribe(resp => {
      this.evaluationForm = resp;
    })
  }

  save() {
    if (this.evaluationForm.id) {
      this.evaluationService.modify(this.evaluationForm);
    } else {
      this.evaluationService.create(this.evaluationForm);
    }

    this.evaluationForm = null;
  }

  // pour l'exemple => mais de préférence coder le subscribe dans le service
  delete(id: number) {
    this.evaluationService.deleteById(id).subscribe(resp => {
      this.evaluationService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.evaluationForm = null;
  }
}
