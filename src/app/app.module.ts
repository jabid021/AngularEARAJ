import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import {EvaluationService} from "./evaluation/evaluation.service";
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from "@angular/forms";
import { SalleComponent } from './salle/salle.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    AccueilComponent,
    SalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EvaluationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
