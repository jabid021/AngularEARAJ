import {Injectable} from '@angular/core';
import {Evaluation} from "../model/evaluation";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  evaluations: Array<Evaluation> = new Array<Evaluation>();

  constructor() {
    this.evaluations.push(new Evaluation(1, 0, 15, 18, "Bon élément"));
    this.evaluations.push(new Evaluation(2, 1, 12, 10, "Peut mieux faire"));
    this.evaluations.push(new Evaluation(3, 0, 19, 15, "Excellent"));
  }

  findAll(): Array<Evaluation> {
    return this.evaluations;
  }

  findById(id: number): Evaluation {
    return this.evaluations.find(evaluation => evaluation.id == id);
  }

  create(evaluation: Evaluation) {
    let max = 0;
    for (let current of this.evaluations) {
      if (max < current.id) {
        max = current.id;
      }
    }
    evaluation.id = ++max;
    evaluation.version = 0;

    this.evaluations.push(evaluation);
  }

  modify(evaluation: Evaluation) {
    let find: boolean = false;
    for (var indice = 0; indice < this.evaluations.length; indice++) {
      if (this.evaluations[indice].id == evaluation.id) {
        find = true;
        break;
      }
    }
    if (find) {
      evaluation.version++;
      this.evaluations[indice] = evaluation;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.evaluations.length; indice++) {
      if (this.evaluations[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.evaluations.splice(indice, 1);
    }
  }
}
