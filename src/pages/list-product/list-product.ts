import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { Product } from '../../providers/products/products.model';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-list-product', 
  templateUrl: 'list-product.html',
})
export class ListProductPage {

  category:any[]
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private productService: ProductsProvider, private shoppingCartService: ShoppingCartProvider,
    public toastCtrl: ToastController) {
    this.category = this.navParams.get('category');
    console.log(this.category);
    
  }

  ionViewDidLoad() {
    //this.getListProductsByCategoryId();
  }

  getListProductsByCategoryId() {
    //this.productService.getListProductsByCategory(this.idCat).subscribe(list => this.productList = list);
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item)
    this.presentToast()
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Item adicionado ao carrinho',
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }


}
