import { Injectable } from '@angular/core';
import { ShopItem } from './item';
import { v4 } from 'uuid';
import { ShopItemFilter } from './shop-item-filter';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  items: ShopItem[] = [];

  getItems(){
    return this.items;
  }

  removeItem(id: string){
    this.items = this.items.filter(c => c.id != id);
  }

  addItem(item: Omit<ShopItem, 'id'>){
    let id = v4();

    let newItem = { ...item, id };

    this.items.push(newItem);

    return id;
  }

  searchItems(filter: Partial<ShopItemFilter>){
    let result = this.items;
    if(filter.name !== null && filter.name !== undefined && filter.name !== ''){
      result = result.filter(c => c.name.includes(filter.name!));
    }

    if(filter.priceFrom !== null && filter.priceFrom !== undefined){
      result = result.filter(c => c.price >= filter.priceFrom!);
    }

    if(filter.priceTo !== null && filter.priceTo !== undefined){
      result = result.filter(c => c.price <= filter.priceTo!);
    }

    if(filter.name !== null && filter.name !== undefined && filter.name !== ''){
      result = result.filter(c => c.name.includes(filter.name!));
    }

    return result;
  }

  constructor(){
    this.items = [
      {
        id: 'TODO add guid here',
        name: 'iphone 17 pro max',
        description: 'Best iphone ever',
        imageUrl: '',
        price: 1100
      },
      {
        id: 'TODO add guid here 2',
        name: 'galaxy s25 ultra',
        description: 'Best galaxy ever',
        imageUrl: '',
        price: 1000
      }
    ]
  }
}
