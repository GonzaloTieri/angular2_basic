import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    productId: number;
    constructor(private _route: ActivatedRoute,
                private _router : Router ){
    }
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.productId = id;
    }

    onBack() : void {
        this._router.navigate(['/products']);
    }

}