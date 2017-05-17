import { Component, OnInit } from '@angular/core'
import { HeaderComponent } from '../header/header.component'
import { IProduct } from './product'
import { StarComponent } from '../shared/star.component'
import { ProductService } from '../services/product.sercice'


@Component({
    //selector: 'my-app-content-product',
    moduleId: module.id,
    templateUrl: 'content-product.component.html',
})
export class ContentProductComponent implements OnInit {
    //console.log(StarComponent);
    thisweek: number = 50;

    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[];
    errorMessage : string;

// Es la forma larga de hacer lo mismo 
/* 
    private  _productService: ProductService; 
    constructor( productService: ProductService) {
        this. _productService = productService;
    }
*/
    constructor(private _productService: ProductService) {

    }

    ngOnInit() : void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                       error => this.errorMessage = <any>error );
    }

    toggleImage(): void {
        console.log(StarComponent);
        if(this.showImage){
            this.showImage = false;
        }else{
            this.showImage = true;
        }
    }

    escucharGrito(data: any): void {
        this.listFilter = data;
    }

    
}