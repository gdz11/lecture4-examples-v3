import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItem } from './store-item';

describe('StoreItem', () => {
  let component: StoreItem;
  let fixture: ComponentFixture<StoreItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
