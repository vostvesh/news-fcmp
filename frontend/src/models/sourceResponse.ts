import { Article } from './article';

export class SourceResponse {
  status: string;
  source: string;
  sortBy: string;
  articles: Article[];
  constructor(status: string, source: string, sortBy: string, articles: Article[]) {
    this.status = status;
    this.source = source;
    this.sortBy = sortBy;
    this.articles = articles;
  }
}
