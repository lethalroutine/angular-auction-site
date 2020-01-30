import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsSiteComponent } from './auctions-site.component';

describe('AuctionsSiteComponent', () => {
  let component: AuctionsSiteComponent;
  let fixture: ComponentFixture<AuctionsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
