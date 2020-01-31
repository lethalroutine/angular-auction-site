import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsCounterComponent } from './cart-items-counter.component';

describe('CartItemsCounterComponent', () => {
  let component: CartItemsCounterComponent;
  let fixture: ComponentFixture<CartItemsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
