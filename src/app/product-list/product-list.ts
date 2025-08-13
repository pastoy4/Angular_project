import { Component } from '@angular/core';
import { Products } from "../products/products";
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-product-list',
  imports: [Products],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  constructor(public cartService: CartService, public productService: ProductService){
  
    }
    cart_items: any[] = [];
  addToCart(product:any){
    this.cartService.addToCart(product);

  }
}
