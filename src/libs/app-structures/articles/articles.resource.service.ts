import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';

@Injectable({
  providedIn: 'root',
})
export class ArticleResourceService {
  constructor(private readonly httpClient: HttpClient) {}

  getArticles(): Promise<Article[]> {
    return this.httpClient
      .get<Article[]>(`${environment.fakeApiUrl}/articles`)
      .toPromise();
  }
}
