import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthServiceProvider } from '../auth-service/auth-service';


@Injectable()
export class ProductsProvider {

  constructor(public firestore: AngularFirestore, private auth: AuthServiceProvider ) {
    console.log('Hello ProductsProvider Provider');
  }

  /*getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${CANTINAFUMEC_API}/menu`);
  }

  getListProductsByCategory(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${CANTINAFUMEC_API}/menu?categoryId=${id}`);
  }*/

  getListCategoriesMenu(): AngularFirestoreCollection<any> {
    return this.firestore.collection(`category`);
  }

  getListProductsByCategory(id): Observable<Product[]> {
    return null;
  }

}
