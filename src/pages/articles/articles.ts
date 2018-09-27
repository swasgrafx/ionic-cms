import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  LoadingController,
  NavParams } from 'ionic-angular';

import { ArticlesProvider } from '../../providers/articles/articles';
import { Article } from '../../models/article/article'
import { ArticlePage } from '../article/article';
import { ArticleCreatePage } from '../article-create/article-create';

/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {

  articles: Article[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private articlesProvider: ArticlesProvider,
    private loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    this.getArticles();
  }

  private getArticles(): void{

    let loader = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loader.present();

    this.articlesProvider.getArticles().subscribe(
      (response:any)=>{
        this.articles = response.articles;
//        console.log(this.articles);
        loader.dismiss();
      }
    );
  }
  toArticle(slug:string): void{
    this.navCtrl.push(ArticlePage, {slug: slug});
  }

  toArticleCreate(slug:string): void{
    this.navCtrl.push(ArticleCreatePage);
  }

}
