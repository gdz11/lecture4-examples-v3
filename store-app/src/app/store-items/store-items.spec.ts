import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItems } from './store-items';

describe('StoreItems', () => {
  let component: StoreItems;
  let fixture: ComponentFixture<StoreItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
