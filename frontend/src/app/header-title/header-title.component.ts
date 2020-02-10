import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {
  title: string;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.title.subscribe(title => this.title = title);
  }
}
