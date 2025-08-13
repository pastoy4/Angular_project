import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Products } from "../products/products";
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, Products],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public cartService: CartService, public productService: ProductService){

  }

  cart_items: any[] = [];
  addToCart(product:any){
    this.cartService.addToCart(product);

  }

}
