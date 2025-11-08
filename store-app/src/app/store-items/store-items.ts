import { Component, inject, OnInit, signal } from '@angular/core';
import { StoreService } from '../store-service';
import { StoreItem } from '../store-item/store-item';
import { ShopItem } from '../item';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-store-items',
  imports: [StoreItem, ReactiveFormsModule],
  templateUrl: './store-items.html',
  styleUrl: './store-items.css',
})
export class StoreItems implements OnInit {

  items = signal<ShopItem[]>([]);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl<number|null>(null, Validators.required),
    imageUrl: new FormControl('', Validators.required)
  });

  searchForm = new FormGroup({
    name: new FormControl(''),
    priceFrom: new FormControl(0),
    priceTo: new FormControl<number | null>(null)
  })

  ngOnInit(): void {
    this.items.set(this.storeService.getItems());
    console.log(this.items());
  }

  onShopItemDelete(item: ShopItem){
    this.storeService.removeItem(item.id);
    this.items.set(this.storeService.getItems());
  }

  onShopItemAdd(){
    if(this.form.valid){

      console.log('adding shop item');

      let value = this.form.value;
      this.storeService.addItem({
        name: value.name!,
        description: value.description!,
        price: value.price!,
        imageUrl: value.imageUrl!
      });

      this.form.reset();

      this.items.set(this.storeService.getItems());
    }
  }

  onSearch(){
    let value = { ... this.searchForm.value};
    this.items.set(this.storeService.searchItems({
      name: value.name
    }));
  }

  storeService = inject(StoreService);

}
