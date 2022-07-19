import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IProductDetails } from 'src/app/entities/product-details.entity';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() productDetails? : IProductDetails | null;
  @Output() isDetialsDisplayedEvent = new EventEmitter<any>();
  showDetails(Id: any): void{
     this.isDetialsDisplayedEvent.emit({mode:false,id:null});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
