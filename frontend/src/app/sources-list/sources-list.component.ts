import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NewsSource } from 'src/models/newsSource';
import { Subscription } from 'rxjs';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.scss']
})
export class SourcesListComponent implements OnInit, OnDestroy {
  sources: NewsSource[];
  getSourcesSubscription: Subscription;
  getNewsSubscription: Subscription;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getSourcesSubscription = this.newsService
      .getSources()
      .subscribe(data => (this.sources = data.sources));
  }

  ngOnDestroy(): void {
    this.getSourcesSubscription.unsubscribe();
  }

  onSelect($event: any) {
    const value = $event.target.value;
    this.newsService.setNews(value);
  }
}
