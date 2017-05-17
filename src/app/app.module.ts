import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import {HeaderComponent} from './header/header.component';
import {StarComponent} from './shared/star.component';
import {ContentProductComponent} from './content-product/content-product.component';
import {ProductDetailGuard} from './services/product-guard.service'
import {ProductDetailComponent} from './content-product/product-detail.component';
import {FooterComponent} from './footer/footer.component';
import {ContentProductFilterPipe} from './content-product/content-product-filter.pipe';
import {HomeComponent} from './home/home.component';



@NgModule({
  imports: [ 
    BrowserModule
    ,FormsModule
    ,HttpModule
    ,RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'products', component: ContentProductComponent },
      { path: 'product/:id', 
          canActivate:[ProductDetailGuard],
          component: ProductDetailComponent 
      },
      { path: '**', redirectTo:'home', pathMatch: 'full'}
    ])
  ],
  declarations: [ 
    AppComponent 
    ,HeaderComponent
    ,ContentProductComponent
    ,ProductDetailComponent
    ,FooterComponent
    ,ContentProductFilterPipe
    ,StarComponent
    ,HomeComponent
  ],
  // Sirve para inyectar del Servicio (injeccion de dependencia) y lo usa arriva en la ruta 
  // para denegar cualquier entrada invalida, canActivate en el Routeeo
  providers: [ 
    ProductDetailGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
