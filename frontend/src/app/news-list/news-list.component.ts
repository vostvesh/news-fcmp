import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { NewsService } from '../news.service';
import { Subscription } from 'rxjs';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsSubscription: Subscription;
  @Input() articles: Article[];
  // filteredArticles: Article[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    // console.log(this.articles)
    // this.newsService.articles.subscribe(data => {
    //   this.articles = data;
    //   this.filteredArticles = data;
    //   this.newsService.arts = data;
    // });
    // this.newsService.filter.subscribe(
    //   filterValue =>
    //     (this.filteredArticles = this.articles.filter(
    //       article => article.description.toLowerCase().includes(filterValue)
    //     ))
    // );
  }
}
