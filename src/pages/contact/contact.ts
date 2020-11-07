import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { OrderProvider } from '../../providers/order/order';
import { Order } from '../../providers/order/order.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public orderList: Observable<Order[]>;

  constructor(public navCtrl: NavController, private orderProvider: OrderProvider,
    public loadingCtrl: LoadingController, public auth: AuthServiceProvider) {

  }

  ionViewDidLoad() {
    const loading: Loading = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: 'Carregando pedidos...'
      }
    );
    loading.present();

    this.orderList = this.orderProvider.getOrderList().valueChanges();
    this.orderList.subscribe(
      data => {
        console.log(data);
        
        if(data.length >= 0){
          loading.dismiss();
        }
        
      }
    )
  }

  logout() {
    this.auth.signOut();
  }

}
