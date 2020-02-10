import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from 'src/models/article';
import { switchMap } from 'rxjs/operators';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;
  id: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        (params.get('id'))
    )).subscribe(id => {
      this.id = id;
      this.article = this.newsService.arts[+id];
    });
  }

}
