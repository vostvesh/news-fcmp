import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
  form = new FormGroup({
    heading: new FormControl(''),
    shortDescription: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
    sourceUrl: new FormControl('')
  });


  constructor(private newsService: NewsService) { }

  ngOnInit() {}

  onSubmit(form) {
    console.log(this.form.value);
    const { content, image, date, heading} = this.form.value;
    this.newsService.saveArticle(content, heading, image, date);
    window.location.pathname = '/';
  }
}
