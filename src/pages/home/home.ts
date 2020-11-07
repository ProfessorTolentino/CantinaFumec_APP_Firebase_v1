import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { ListProductPage } from '../list-product/list-product';
import { ProductsProvider } from '../../providers/products/products';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listCategory: Observable<any[]>/* = [
    {
      "id":1,
      "cardTitle":"Sanduíche",
      "cardSubtitle":"Sanduíches naturais",
      "imagem":"assets/imgs/sanduiche-natural.jpg"
    },
    {
      "id": 2,
      "cardTitle": "Pães de Queijo",
      "cardSubtitle": "Normal e Recheados",
      "imagem": "assets/imgs/pao-queijo.jpg"
    },
    {
      "id": 3,
      "cardTitle": "Pizzas",
      "cardSubtitle": "Com bordas e Sem bordas",
      "imagem": "assets/imgs/pizza.jpg"
    },
    {
      "id": 4,
      "cardTitle": "Chinesa",
      "cardSubtitle": "Quentes e Rolinhos",
      "imagem": "assets/imgs/chinesa.jpg"
    },
    {
      "id": 5,
      "cardTitle": "Sucos",
      "cardSubtitle": "Sucos e Refrigerantes",
      "imagem": "assets/imgs/suco.jpg"
    },
    {
      "id": 6,
      "cardTitle": "Sobremesas",
      "cardSubtitle": "Tortas e Doces",
      "imagem": "assets/imgs/sobremesa.jpg"
    }    
  ]*/
  
  openListProduct(category) {
    this.navCtrl.push(ListProductPage, { "category": category })
  }


  constructor(public navCtrl: NavController, private productProvider:ProductsProvider,public loadingCtrl: LoadingController, ) {

    const loading: Loading = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: 'Carregando cardápio...'
      }
    );
    loading.present();
    
    this.listCategory = this.productProvider.getListCategoriesMenu().valueChanges();
    this.listCategory.subscribe(
      data => {
        //console.log(data);
        
        if(data.length >= 0){
          loading.dismiss();
        }
        
      }
    )
  }

}
