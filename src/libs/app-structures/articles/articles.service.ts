import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';
import { ArticleResourceService } from './articles.resource.service';
import { ArticlesStoreService } from './articles.store.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(
    private readonly articlesStore: ArticlesStoreService,
    private readonly articlesResource: ArticleResourceService
  ) {}

  async getArticles(): Promise<Article[]> {
    return new Promise((resolve) => {
      this.articlesResource
        .getArticles()
        .then(async (articles) => {
          this.articlesStore.setArticles(articles);
          resolve(articles);
        })
        .catch(async (error: HttpErrorResponse) =>
          console.error(error.message)
        );
    });
  }
}
