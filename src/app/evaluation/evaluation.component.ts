import {Component, OnInit} from '@angular/core';
import {EvaluationService} from "./evaluation.service";
import {Evaluation} from "../model/evaluation";

@Component({
  selector: 'evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  evaluationForm: Evaluation = null;

  constructor(private evaluationService: EvaluationService) {
  }

  ngOnInit(): void {
  }

  list(): any {
    return this.evaluationService.findAll();
  }

  add() {
    this.evaluationForm = new Evaluation();
  }

  edit(id: number) {
    let evaluation: Evaluation = this.evaluationService.findById(id);
    this.evaluationForm = new Evaluation(evaluation.id, evaluation.version, evaluation.comportemental, evaluation.technique, evaluation.commentaires);
  }

  save() {
    if (this.evaluationForm.id) {
      this.evaluationService.modify(this.evaluationForm);
    } else {
      this.evaluationService.create(this.evaluationForm);
    }

    this.evaluationForm = null;
  }

  cancel() {
    this.evaluationForm = null;
  }
}
