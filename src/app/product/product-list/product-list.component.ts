import { Component, OnInit , Input, OnChanges , Output , EventEmitter} from '@angular/core';
import { IProduct } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  @Input() products: IProduct[] = []
  @Output() isDetialsDisplayedEvent = new EventEmitter<any>();
   showDetails(Id: string): void{
      this.isDetialsDisplayedEvent.emit({mode:true,Id: Id});
   }
}
