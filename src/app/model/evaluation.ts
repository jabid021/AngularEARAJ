export class Evaluation {
  id: number;
  version: number;
  comportemental: number;
  technique: number;
  dtEvaluation:string;
  commentaires: string;

  constructor(id?: number, version?: number, comportemental?: number, technique?: number, commentaires?: string,dtEvaluation?:string) {
    this.id = id;
    this.version = version;
    this.comportemental = comportemental;
    this.technique = technique;
    this.commentaires = commentaires;
    this.dtEvaluation=dtEvaluation;
  }
}
