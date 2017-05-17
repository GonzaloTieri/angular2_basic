export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    elaborationDate: string;
    listFilter: string
    price: number;
    starRating: number;
    imageUrl: string;
}

export class Product implements IProduct {
    constructor( public productId:number,
        public productName: string,
        public productCode: string,
        public elaborationDate: string,
        public listFilter: string,
        public price: number,
        public starRating: number,
        public imageUrl: string

    ){
    }

    calculateDiscount(porcent:number):number {
        return this.price - (this.price * porcent / 100);
    }
}