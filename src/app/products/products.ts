import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ToKHRPipe } from '../pipe/to-khr-pipe';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, ToKHRPipe, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  @Input() product: any;
  @Output() onAddToCart: any = new EventEmitter<any>();
  addToCart(product:any){
    this.onAddToCart.emit(product);
  }

}
