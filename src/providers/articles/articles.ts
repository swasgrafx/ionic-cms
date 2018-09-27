import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Article } from '../../models/article/article';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

/*
  Generated class for the ArticlesProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticlesProvider {

  private url:string = 'http://localhost:3000/api/articles';

  constructor(public http: HttpClient) {
  }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.url);
  }

  getArticle(slug:string): Observable<Article>{
    return this.http.get<Article>(`${this.url}/${slug}`);
  }

  createArticle(article:Article): Observable<Article>{
    return this.http.post<Article>(this.url, article, httpOptions);
  }

  editArticle(article:Article): Observable<Article>{
    return this.http.put<Article>(this.url, article, httpOptions);
  }

  deleteArticle(id:string): Observable<Article>{
//    console.log('delete article');
    return this.http.delete<Article>(`${this.url}/${id}`);
}

}
