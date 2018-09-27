import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/user/user';
import { UserCreatePage } from '../pages/user-create/user-create';
import { UserEditPage } from '../pages/user-edit/user-edit';
import { ArticlesPage } from '../pages/articles/articles';
import { ArticlePage } from '../pages/article/article';
import { ArticleCreatePage } from '../pages/article-create/article-create';
import { ArticleEditPage } from '../pages/article-edit/article-edit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';
import { ArticlesProvider } from '../providers/articles/articles';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    UserCreatePage,
    UserEditPage,
    ArticlesPage,
    ArticlePage,
    ArticleCreatePage,
    ArticleEditPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    UserCreatePage,
    UserEditPage,
    ArticlesPage,
    ArticlePage,
    ArticleCreatePage,
    ArticleEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    ArticlesProvider
  ]
})
export class AppModule {}
