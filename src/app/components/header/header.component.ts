import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { routeName } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @select(['cart']) readonly stateCart: Observable<number[]>;

  routeName = routeName;

  faIcons: { icon: string; route: string }[] = [
    {
      icon: 'pi pi-home',
      route: routeName.products,
    },
    {
      icon: 'pi pi-shopping-cart',
      route: routeName.cart,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
