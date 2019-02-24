import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from './../service/article.service';
import { Article } from './../model/article';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  articles: Article;
  constructor(private rest: ArticleService, private router: Router) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.rest.getArticles()
    .subscribe(data => {
      this.articles = data;
      console.log(this.articles);
     },
     (err) => {
      console.log(err);
    });
  }


}
