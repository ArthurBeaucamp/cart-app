import { NgReduxModule } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductsDisplayComponent } from './products-display.component';

describe('ProductsDisplayComponent', () => {
  let component: ProductsDisplayComponent;
  let fixture: ComponentFixture<ProductsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgReduxModule, HttpClientModule],
      declarations: [ProductsDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display articles', () => {
    expect(fixture.debugElement.query(By.css('.products'))).toBeFalsy();

    component.articles = [
      {
        id: 1,
        name: 'Baeckeoffe',
        description: 'Lorem',
        imageUrl: 'https://www.baeckeoffe.jpg',
      },
      {
        id: 2,
        name: 'Baeckeoffe',
        description: 'Lorem',
        imageUrl: 'https://www.baeckeoffe.jpg',
      },
      {
        id: 3,
        name: 'Baeckeoffe',
        description: 'Lorem',
        imageUrl: 'https://www.baeckeoffe.jpg',
      },
    ];
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css('.products-article')).length
    ).toEqual(3);
  });
});
