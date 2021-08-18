import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/libs/app-structures/articles/articles.service';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss'],
})
export class ProductsDisplayComponent implements OnInit {
  constructor(private readonly articlesService: ArticlesService) {}

  ngOnInit() {
    this.getArticles();
  }

  async getArticles(): Promise<void> {
    const articles: Article[] = await this.articlesService.getArticles();

    // TODO à virer dès que l'affichage est implémenté
    console.log(articles);
  }
}
