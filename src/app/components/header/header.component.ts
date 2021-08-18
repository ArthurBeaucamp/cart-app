import { Component, OnInit } from '@angular/core';
import { routeName } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routeName = routeName;

  faIcons: { icon: string; route: string; count?: string }[] = [
    {
      icon: 'pi pi-home',
      route: routeName.products,
    },
    {
      icon: 'pi pi-shopping-cart',
      route: routeName.cart,
      count: '0',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
