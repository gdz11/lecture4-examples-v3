import { Component, signal } from '@angular/core';
import { StoreItems } from './store-items/store-items';

@Component({
  selector: 'app-root',
  imports: [StoreItems],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('store-app');
}
