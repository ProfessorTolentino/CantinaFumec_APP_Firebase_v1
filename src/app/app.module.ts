import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ComponentsModule } from '../components/components.module'
import { HttpClientModule } from '@angular/common/http'

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListProductPage } from '../pages/list-product/list-product';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CardBackgroundComponent } from '../components/card-background/card-background';
import { ProductsProvider } from '../providers/products/products';
import { OrderProvider } from '../providers/order/order';
import { OrderPage } from '../pages/order/order';
import { ShoppingCartProvider } from '../providers/shopping-cart/shopping-cart';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { LoginPage } from '../pages/login/login'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SignupPage } from '../pages/signup/signup';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListProductPage,
    ShoppingCartPage,
    OrderPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CardBackgroundComponent,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListProductPage,
    ShoppingCartPage,
    OrderPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsProvider,
    ShoppingCartProvider,
    OrderProvider,
    AngularFireAuth,
    AuthServiceProvider
  ]
})
export class AppModule {}
