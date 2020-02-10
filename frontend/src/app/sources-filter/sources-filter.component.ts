import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sources-filter',
  templateUrl: './sources-filter.component.html',
  styleUrls: ['./sources-filter.component.scss']
})
export class SourcesFilterComponent implements OnInit {
  inputValue: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onChange(e: any) {
    this.inputValue = e.target.value;
  }

  onFind() {
    this.newsService.setFilter(this.inputValue);
  }

}
