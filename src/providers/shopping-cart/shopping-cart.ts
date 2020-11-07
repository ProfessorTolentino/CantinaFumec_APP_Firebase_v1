import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CartItem  } from '../shopping-cart/cart-item.model'
import { Product } from "../products/products.model";

/*
  Generated class for the ShoppingCartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShoppingCartProvider {

  items: CartItem[] = []

  constructor(public http: HttpClient) {
    console.log('Hello ShoppingCartProvider Provider');
  }

  clear() {
    this.items = []
  }

  addItem(item: Product) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if (foundItem) {
      this.increaseQty(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1
    if (item.quantity === 0) {
      this.removeItem(item)
    }
  }
  
  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }
}
