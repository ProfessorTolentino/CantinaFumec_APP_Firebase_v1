import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController, Alert } from 'ionic-angular';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { OrderProvider } from '../../providers/order/order';


/**
 * Generated class for the ShoppingCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html',
})
export class ShoppingCartPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, private orderProvider:OrderProvider, 
    public navParams: NavParams, public shoppingCartService: ShoppingCartProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartPage'); 
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item: any) {
    this.shoppingCartService.decreaseQty(item)
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item.menuItem)
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  createOrder(): void {
    const loading: Loading = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: 'Registrando pedido'
      }
    );
    loading.present();
    
    this.orderProvider
      .createOrder({ value: this.total(),items:this.items() })
      .then(
        () => {
          loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: 'Compra realizada!',
              buttons: [{ text: 'Ok'}],
            });
            alert.present();
            
          });
        },
        error => {
          loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancelar' }],
            });
            alert.present();
          });
        }
      );
  }

}
