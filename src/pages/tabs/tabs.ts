import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShoppingCartPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
