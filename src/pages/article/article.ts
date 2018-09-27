import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  LoadingController,
  NavParams } from 'ionic-angular';

import { ArticlesProvider } from '../../providers/articles/articles';
import { Article } from '../../models/article/article';
import { ArticlesPage } from '../articles/articles';
import { ArticleEditPage } from '../article-edit/article-edit';
/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  article: Article;

  constructor(
    private loadingCtrl: LoadingController,
    private articlesProvider: ArticlesProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getArticle(this.navParams.data.slug);
  }
  private getArticle(slug:string): void{

    let loader = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loader.present();

    this.articlesProvider.getArticle(slug).subscribe(
      (response:any)=>{
        this.article = response.article;
        console.log(response);
        loader.dismiss();
      }
    );
  }

    public articleEdit(slug): void{
      //console.log(Article);
      this.navCtrl.push(ArticleEditPage, {slug: slug});
    }

    public deleteArticle(Article:string): void{
      if(confirm('Are you sure you want to delete '+this.article.slug)){
        this.articlesProvider.deleteArticle(Article).subscribe(
          (response:any)=>{
        this.navCtrl.push(ArticlesPage);
        //console.log('hello world');
          }
      );
    }
  }
}
