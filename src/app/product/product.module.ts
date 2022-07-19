import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductComponent, 
    ProductDetailsComponent, 
    ProductGridComponent, 
    ProductListComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductComponent]
})
export class ProductModule { }
