import {Injectable} from '@angular/core';
// Los siguientes 3 son para el servicio http para request a APIs
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// Los dos siguiente son para el menejo de error y que hacer cuando sale bien 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import {IProduct} from '../content-product/product';

@Injectable()
export class ProductService {
    private _getProductUrl : string = 'api/products/products.json';

    constructor(private _http : Http){}



    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._getProductUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
