import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';

@Component({
  selector: 'app-products-display-item',
  templateUrl: './products-display-item.component.html',
  styleUrls: ['./products-display-item.component.scss'],
})
export class ProductsDisplayItemComponent implements OnInit {
  @Input()
  article: Article;

  constructor() {}

  ngOnInit(): void {
    console.log(this.article);
  }
}
