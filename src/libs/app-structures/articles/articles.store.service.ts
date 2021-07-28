import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { TypeArticlesAction } from 'src/app/store/reducers/articles.reducer';
import { appState } from 'src/app/store/store';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';

@Injectable({
  providedIn: 'root',
})
export class ArticlesStoreService {
  constructor(private readonly ngRedux: NgRedux<appState>) {}

  setArticles(articles: Article[]) {
    this.ngRedux.dispatch({
      type: TypeArticlesAction.SET_ARTICLES,
      payload: { articles },
    });
  }
}
