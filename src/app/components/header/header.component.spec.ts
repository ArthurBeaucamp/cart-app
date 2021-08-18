import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display icons', () => {
    component.faIcons = [
      {
        icon: 'pi pi-home',
        route: '',
      },
      {
        icon: 'pi pi-shopping-cart',
        route: 'cart',
        count: '7',
      },
    ];
    fixture.detectChanges();

    const iconList = fixture.debugElement.queryAll(By.css('li'));

    expect(iconList.length).toEqual(2);

    // NOTE Test attribute pbadge
    expect(
      iconList[0].query(By.css('i')).nativeElement.getAttribute('pbadge')
    ).toEqual(null);
    expect(
      iconList[1].query(By.css('i')).nativeElement.getAttribute('pbadge')
    ).toEqual('');
  });
});
