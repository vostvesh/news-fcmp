import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/models/article';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  articles: Article[];
  newsSubscription: Subscription;
  filteredArticles: Article[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.articles.subscribe(data => {
      this.articles = data;
      this.filteredArticles = data;
      this.newsService.arts = data;
    });
    this.newsService.filter.subscribe(
      filterValue =>
        (this.filteredArticles = this.articles.filter(
          article => article.description.toLowerCase().includes(filterValue)
        ))
    );
    this.newsService.getMyArticles();
  }
}
