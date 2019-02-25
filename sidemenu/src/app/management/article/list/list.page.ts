import { Component, OnInit } from '@angular/core';

import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/model/article';


declare var require: any;

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  articles: any = null;
  art: any;
  constructor(private rest: ArticleService) {
  }

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

    // onAddBasket(art){
    // //
    // }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  }

  showArticle(ev: any) {
    this.getArticles();

    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.articles = this.articles.filter((art) => {
        return (art.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

  }
}
