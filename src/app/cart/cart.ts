import { Component, Input } from '@angular/core'; 
import { CartService } from '../service/cart-service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  providers: [],
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService){

  }


}
