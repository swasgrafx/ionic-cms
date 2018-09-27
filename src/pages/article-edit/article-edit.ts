import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Article } from '../../models/article/article'
import { ArticlesProvider } from '../../providers/articles/articles';
import { ArticlePage } from '../article/article'
/**
 * Generated class for the ArticleEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-edit',
  templateUrl: 'article-edit.html',
})
export class ArticleEditPage {

  article: FormGroup;
  thearticle: Article;

  constructor(
    private formBuilder: FormBuilder,
    private articlesProvider: ArticlesProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.article = this.formBuilder.group({
        _id: [],
        title: ['', Validators.required],
        body: ['', Validators.required],
        description: [],
        keywords: []
      });
  }
  ionViewDidLoad() {
    this.getArticle(this.navParams.data.slug);
  }
  private getArticle(slug:string): void{

    this.articlesProvider.getArticle(slug).subscribe(
      (response:any)=>{
       this.thearticle = response.article;
       console.log(response)
       //console.log(this.thearticle.articlename);
       //loader.dismiss();
      }
    );
  }
  editArticle(): void{
    this.articlesProvider.editArticle(this.article.value).subscribe(
      (response:any)=>{
        console.log(response)
        this.navCtrl.push(ArticlePage, {slug: response.article.slug});
        //console.log(this.thearticle.articlename);

      }
    );
  }
}
