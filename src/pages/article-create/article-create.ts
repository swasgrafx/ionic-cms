import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ArticlesProvider } from '../../providers/articles/articles';
import { ArticlePage } from '../article/article'

/**
 * Generated class for the ArticleCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-create',
  templateUrl: 'article-create.html',
})
export class ArticleCreatePage {

  article: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private articlesProvider: ArticlesProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.article = this.formBuilder.group({
        title: ['', Validators.required],
        body: ['', Validators.required],
        description: [],
        keywords: []
      });
  }

  createArticle(): void{
    this.articlesProvider.createArticle(this.article.value).subscribe(
      (response:any)=>{
        //console.log(response.article.slug)
        this.navCtrl.push(ArticlePage, {slug: response.article.slug});
      }
    );
  }
}
