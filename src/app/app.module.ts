import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import {EvaluationService} from "./evaluation/evaluation.service";
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from "@angular/forms";
import { FiliereComponent } from './filiere/filiere.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { MatiereComponent } from './matiere/matiere.component';
import { SalleComponent } from './salle/salle.component';
import {SalleService} from "./salle/salle-service.service";
import { FormateurComponent } from './formateur/formateur.component';
import { CheckedPipe } from './checked.pipe';
import { UEComponent } from './ue/ue.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    AccueilComponent,
    FiliereComponent,
    StagiaireComponent,
    SalleComponent,
    MatiereComponent,
    FormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EvaluationService, SalleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
