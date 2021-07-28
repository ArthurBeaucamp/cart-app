import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/libs/app-structures/articles/articles.service';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cart-app';

  constructor(private readonly articlesService: ArticlesService) {}

  // TODO Actuellement ici pour test à déplacer sur la bonne page quand elle sera intégré
  ngOnInit() {
    this.getArticles();
  }

  async getArticles(): Promise<void> {
    const articles: Article[] = await this.articlesService.getArticles();

    console.log(articles);
  }
}
