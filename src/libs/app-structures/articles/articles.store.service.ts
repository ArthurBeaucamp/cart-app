import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeArticlesAction } from 'src/app/store/reducers/articles.reducer';
import { appState } from 'src/app/store/store';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';

@Injectable({
  providedIn: 'root',
})
export class ArticlesStoreService {
  storeArticles: Observable<Article[]>;

  constructor(private readonly ngRedux: NgRedux<appState>) {
    this.storeArticles = this.ngRedux.select(['articles']);
  }

  setArticles(articles: Article[]) {
    this.ngRedux.dispatch({
      type: TypeArticlesAction.SET_ARTICLES,
      payload: { articles },
    });
  }

  getArticles(): Article[] {
    let articles: Article[] = [];

    this.storeArticles.subscribe((items) => (articles = items)).unsubscribe();

    return articles;
  }
}
