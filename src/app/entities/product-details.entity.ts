import { IProduct } from "./product.entity";

export interface IProductDetails {
    Id : string; 
    Product : IProduct;
    color? : string;
    Owner? : string; 
    inStock : boolean;
    Quantity : number
}