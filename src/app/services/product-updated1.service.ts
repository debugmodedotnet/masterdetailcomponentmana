import { Injectable } from '@angular/core';
import { IProductDetails } from '../entities/product-details.entity';
import { IProduct } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductUpdated1Service {

products : IProduct[]= [
  {
   Id : "1",
   Title : "Pen"
  },
  {
   Id : "2",
   Title : "Pencil"
  },
  {
   Id : "3",
   Title : "Book"
  }

 ]

 productDetails : IProductDetails[] =[
  {
   Id : "1",
   Product:{
       Id : "1",
       Title : "Pen"
     },
     inStock : true,
     Owner: "Dj",
     Quantity : 20
  },
  {
   Id : "2",
   Product:{
       Id : "2",
       Title : "Pencil"
     },
     inStock : true,
     Owner: "Dj",
     Quantity : 20
  },
  {
   Id : "3",
   Product:{
       Id : "3",
       Title : "Book"
     },
     inStock : true,
     Owner: "Dj",
     Quantity : 20
  }
  
 
  
 ]

 
 getProducts() : IProduct[]{
    return this.products;

   }
 getProductDetails(id : string, name : string): IProductDetails | null {
   console.log(name);
     let index=  this.productDetails.findIndex(p => p.Id == id); 
     if(index != -1){
       return this.productDetails[index];
     }
     else {
       return null; 
     }
 }
  constructor() { }
}
