import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';
import { Article } from 'src/models/article';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() articleId: string;
  @Input() article: Article;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onArticleSelect() {
    this.router.navigate(['/article/:id', { id: this.articleId }]);
  }
}
