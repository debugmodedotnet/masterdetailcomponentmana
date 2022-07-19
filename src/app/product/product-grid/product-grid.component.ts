import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/entities/product.entity';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {

   @Input() products: IProduct[] = []
   @Output() isDetialsDisplayedEvent = new EventEmitter<any>();
   showDetails(Id : string): void{
    this.isDetialsDisplayedEvent.emit({mode:true,Id: Id});
   }

}
