// Import Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Import projet
import { Article } from './../model/article';

// Import NodeJS
import * as _ from 'lodash';

// URL par défault - localhost:3000
const defaultUserUrl = 'http://127.0.0.1:3000/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = 'http://127.0.0.1:3000/article';
  urlMenu = 'http://127.0.0.1:3000/menu';
  urlMenuArticle = 'http://127.0.0.1:3000/menu-article';

  constructor(private http: HttpClient) {
  }

   // Gestion futur des droits
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     })
   }

   //#region "ARTICLE"
   getArticles() {
     // on rajoiute un 's' a url pour transformer le chemin correctement
    return this.http.get(this.url + 's');
  }

  getArticle(id: String) {
    return this.http.get(this.url + '/' + id);
  }

  addArticle(article: any) {
    // Transforme le js en JSON
    // let body = JSON.stringify(article);
    // {
    //   libelle : article['libelle'],
    //   description : article['description'],
    //   price : article['price'],
    //   category : article['category'],
    // };
    // console.log(body);
    console.log(article);
    return this.http.post(this.url, article);
  }

  updateArticle(article: any, id: String) {
    const body = {
      libelle : article.libelle,
      description : article.description,
      price : article.price ,
      category : article.category,
    }
    return this.http.put(this.url + '/' + id, body, this.httpOptions );
  }

  deleteArticle(id: String) {
    return this.http.delete(this.url + '/' + id, this.httpOptions );
  }

  getArticleByCategory(category: String) {
    return this.http.get(this.url + '/' + category + '/category');
  }

  // #endRegion "ARTICLE"

   //#region "MENU"
  getMenuByDay(day: String) {
    return this.http.get(this.urlMenu + '/' + day + '/day');
  }

  addMenuArticle(articleId: any, menuId: any) {
    const body = {
      menu_id : menuId,
      article_id : articleId,
    }
    return this.http.post(this.urlMenuArticle, body, this.httpOptions );
  }

  getMenuArticles(menuId: any, category: String){

    const body = {
      menu_id : menuId,
      category : category ,
    }
    return this.http.post(this.urlMenuArticle + 's', body, this.httpOptions );
  }

  deleteMenuArticle(menuId: any, articleId: any){
    const body = {
      menu_id : menuId,
      article_id : articleId,
    }
    return this.http.post(this.urlMenuArticle + '/delete', body, this.httpOptions );
  }

  // #endRegion "MENU"
}
