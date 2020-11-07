import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'; 
import { Order } from '../order/order.model'
import { AuthServiceProvider } from '../auth-service/auth-service';
import { CartItem } from '../shopping-cart/cart-item.model';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  constructor(public firestore: AngularFirestore, private auth: AuthServiceProvider ) { }

  createOrder({ value, items }: { value: number; items: CartItem[]; }): Promise<void> {
    //Para aceitar a lista de objetos que criamos
    const listItems = items.map((obj)=> {return Object.assign({}, obj)});
    
    let id = this.firestore.createId();

    let order = {
      "id" : id,
      "userEmail": this.auth.getEmail(),
      "date": new Date().toISOString(),
      "value":value,
      "items":listItems
    }

    return this.firestore.doc <Order>(`orderList/${id}`).set(order);

    /*
    {
      id,
      order.userId,
      artistName,
      songDescription,
      songName,
    }*/
   }

  getOrderList(): AngularFirestoreCollection<Order> {
    return this.firestore.collection(`orderList`, ref => ref.where('userEmail', '==', this.auth.getEmail()).orderBy('date', "desc"));
  }

}
