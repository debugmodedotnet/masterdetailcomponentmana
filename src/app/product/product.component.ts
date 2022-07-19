import { Component, OnInit } from '@angular/core';
import { IProductDetails } from '../entities/product-details.entity';
import { IProduct } from '../entities/product.entity';
import { ProductUpdated1Service } from '../services/product-updated1.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',

})
export class ProductComponent implements OnInit {

  products : IProduct[] = []; 
  productDetails?: IProductDetails | null  ; 
  isGridDisplayed = true; 
  isDetailsDisplayed = false; 
  constructor(private pservice : ProductService) { }

  ngOnInit(): void {
    this.products = this.pservice.getProducts();
  }

  showGrid():void{
    this.isGridDisplayed = true; 
  }

  showList():void{
   this.isGridDisplayed = false; 
  }

  showDetails(data : any):void{
     this.isDetailsDisplayed = data.mode; 
     if(data.mode && data.Id != null ){
        this.productDetails = this.pservice.getProductDetails(data.Id);
     }
  }

}
