import { Injectable } from '@angular/core';
declare const Swal: any;


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {
    let cart: string = localStorage.getItem('cart_items') ?? '[]';
    this.cart_items = JSON.parse(cart);
  }
  private cart_items: any[] = [];

  addToCart(product: any) {
    let dpl_index = this.cart_items.findIndex(i => i.id == product.id);
    if (dpl_index > -1) {
      this.cart_items[dpl_index].qty++;
    } else {
      product.qty = 1;
      product.is_selected = true;
      this.cart_items.push(product);
    }
    localStorage.setItem('cart_items', JSON.stringify(this.cart_items));
  }
  getCartItems() {
    return this.cart_items;
  }

  increaseQty(item: any) {
    let index = this.cart_items.findIndex(i => i.id == item.id);
    this.cart_items[index].qty++;
    localStorage.setItem('cart_items', JSON.stringify(this.cart_items));
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      let index = this.cart_items.findIndex(i => i.id == item.id);
      this.cart_items[index].qty--;
      localStorage.setItem('cart_items', JSON.stringify(this.cart_items));
    }

  }
  removeItem(item: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result: any) => {
      if (result.isConfirmed) {
        let index = this.cart_items.findIndex(i => i.id == item.id);
        this.cart_items.splice(index, 1);
        localStorage.setItem('cart_items', JSON.stringify(this.cart_items));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }
  getTotal() {
    let total: number = 0;
    this.cart_items.forEach((i: any) => {
      if(i.is_selected){
        total += (i.price * i.qty);
      }
      
    })
    return total;
  }

  selectCartItem(item: any) {
    let index = this.cart_items.findIndex(i => i.id == item.id);
    this.cart_items[index].is_selected =! this.cart_items[index].is_selected;
    localStorage.setItem('cart_items', JSON.stringify(this.cart_items));
  }
}
