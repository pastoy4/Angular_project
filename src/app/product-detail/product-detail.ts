import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { CartService } from '../service/cart-service';
declare const axios: any;
declare const $: any;

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, NgIf],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  product: any = {};
  ngOnInit(): void {
  const product_id: string | null = this.route.snapshot.queryParamMap.get('product_id');
  let ng_this = this;
  $.LoadingOverlay("show");
  axios.get(`https://fakestoreapi.com/products/${product_id}`)
    .then(function (response: any) {
      ng_this.product = response.data;
    })
    .catch(function (error: any) {
      console.log(error);
    })
    .finally(function () {
      $.LoadingOverlay("hide");
    });
}
 addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
