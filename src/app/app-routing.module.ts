import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EvaluationComponent} from "./evaluation/evaluation.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {SalleComponent} from "./salle/salle.component";
import {FormateurComponent} from "./formateur/formateur.component";

const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "evaluation", component: EvaluationComponent},
  {path : "salle", component: SalleComponent},
  {path : "formateur", component: FormateurComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
