import { Injectable } from '@angular/core';
import { NewsSource } from '../models/newsSource';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { SourceResponse } from 'src/models/sourceResponse';

const BASE_URL = 'https://newsapi.org/';
const API_KEY = 'fd19765c1838482c8abdcdd84f9b24e3';
const ENDPOINTS = {
  SOURCES: 'v1/sources/',
  ARTICLES: (source: string) => `v1/articles?source=${source}&apiKey=${API_KEY}`,
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  arts = [];
  title = new BehaviorSubject('');
  articles = new BehaviorSubject([]);
  filter = new BehaviorSubject('');
  constructor(private http: HttpClient) {}

  getSources(): Observable<{status: string, sources: NewsSource[]}> {
    return this.http.get<{status: string, sources: NewsSource[]}>(`${BASE_URL}${ENDPOINTS.SOURCES}`);
  }

  setNews(id: string): void {
    const title = id.charAt(0).toUpperCase() + id.slice(1, id.length);
    this.title.next(title.replace(/-/g, ' '));
    this.http.get<SourceResponse>(`${BASE_URL}${ENDPOINTS.ARTICLES(id)}`).subscribe(data => this.articles.next(data.articles));
  }

  setFilter(filter: string) {
    this.filter.next(filter.toLowerCase());
  }

  saveArticle(content, title, imageUrl, date) {
    this.http.post('api/', {
      headers: { 'content-type': 'application/json'},
      body: {
        content,
        title,
        imageUrl,
        date
      }
    }).subscribe();
  }

  getMyArticles() {
    this.http.get('api/').subscribe(data => console.log(data));
  }
}
