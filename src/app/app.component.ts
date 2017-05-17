import { Component } from '@angular/core';
import {ProductService} from './services/product.sercice'
//import {MyFirstComponent} from './my-first.component'

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'app/app.component.html',
  providers: [ ProductService ]
  
})
export class AppComponent  { name = 'Angular'; }
