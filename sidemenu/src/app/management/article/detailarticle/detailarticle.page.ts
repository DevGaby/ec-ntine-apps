import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-detailarticle',
  templateUrl: './detailarticle.page.html',
  styleUrls: ['./detailarticle.page.scss'],
})
export class DetailarticlePage implements OnInit {
  id: any;
  article: Article;

  constructor(private rest: ArticleService, private route: ActivatedRoute) { 
    this.route.params
      .subscribe(params => {
        this.id = params._id;
        console.log(this.id);
      });
  }

  ngOnInit() {
    // this.id = this.route.snapshot.url[1].path;
    console.log(this.id);
    this.getArtcleById(this.id);
  }

  getArtcleById(id) {
    this.rest.getArticle(id)
    .subscribe(data => {
      this.article = data;
      console.log(this.article);
    }, (err) => {
      console.log(err);
    });
  }
}
