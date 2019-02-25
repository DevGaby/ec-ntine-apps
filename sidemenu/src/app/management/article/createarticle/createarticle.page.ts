import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/model/article';


declare var require: any;
// const Swal = require('sweetalert2');

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.page.html',
  styleUrls: ['./createarticle.page.scss'],
})
export class CreatearticlePage implements OnInit {

  articles: Article = null;
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

  getArticleByCategory() {
  }

  // onSubmit(form: NgForm) {
  //   const { labelArt, priceArt, descriptionArt, catArt } = form.form.value;
  //   this.newArticle(labelArt, priceArt, descriptionArt, catArt);
  // }

  newArticle(value: any) {
     this.rest.addArticle(value)
      .subscribe(data => {
        this.getArticles();
        console.log('ok');
        this.router.navigate([`./list`]);
      }, (err) => {
        console.log(err);
      });
  }

}
