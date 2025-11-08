import { Component, input, output } from '@angular/core';
import { ShopItem } from '../item';

@Component({
  selector: 'app-store-item',
  imports: [],
  templateUrl: './store-item.html',
  styleUrl: './store-item.css',
})
export class StoreItem {
  item = input.required<ShopItem>();

  delete = output<ShopItem>();

  onDelete(){
    this.delete.emit(this.item());
  }
}
