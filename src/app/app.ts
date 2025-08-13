import { Component} from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { CartService } from './service/cart-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  standalone: true,
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pipe';
  constructor(public cartService: CartService){

  }



}