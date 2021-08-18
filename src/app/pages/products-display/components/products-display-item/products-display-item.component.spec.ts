import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDisplayItemComponent } from './products-display-item.component';

describe('ProductsDisplayItemComponent', () => {
  let component: ProductsDisplayItemComponent;
  let fixture: ComponentFixture<ProductsDisplayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDisplayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
