  import {Injectable} from '@angular/core';
import {Evaluation} from "../model/evaluation";
import {Filiere} from "../model/filiere";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConfigService} from "../app-config.service";


@Injectable({
  providedIn: 'root'
})
export class EvaluationHttpService {

  evaluations: Array<Evaluation> = new Array<Evaluation>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Evaluation> {
    return this.evaluations;
  }

  findById(id: number): Observable<Evaluation> {
    return this.http.get<Evaluation>(this.appConfigService.backEndUrl + "evaluation/" + id);
  }

  create(evaluation: Evaluation) {
    this.http.post<Evaluation>(this.appConfigService.backEndUrl + "evaluation/", evaluation).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(evaluation: Evaluation) {
    this.http.put<Evaluation>(this.appConfigService.backEndUrl + "evaluation/" + evaluation.id, evaluation).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "evaluation/" + id);
  }

  load() {
    this.http.get<Array<Evaluation>>(this.appConfigService.backEndUrl + "evaluation/").subscribe(response => {
      this.evaluations = response;
    }, error => console.log(error));
  }
}
