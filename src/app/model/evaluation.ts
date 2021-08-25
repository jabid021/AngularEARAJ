import {Stagiaire} from "./stagiaire";

export class Evaluation {
  id: number;
  version: number;
  comportemental: number;
  technique: number;
  commentaires: string;
  dtEvaluation: Date;
  stagiaire: Stagiaire;

  constructor(id?: number, version?: number, comportemental?: number, technique?: number, commentaires?: string, dtEvaluation?: Date, stagiaire?:Stagiaire) {
    this.id = id;
    this.version = version;
    this.comportemental = comportemental;
    this.technique = technique;
    this.commentaires = commentaires;
    this.dtEvaluation = dtEvaluation;
    this.stagiaire = stagiaire;
  }
}
