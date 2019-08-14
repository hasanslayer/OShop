import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input('product') product:Product;
  @Input('show-actions') showActions = true;

  constructor(private cartService:ShoppingCartService) { }

  addToCart(product:Product){
    let carId = localStorage.getItem('cartId');
    if(!carId){
      this.cartService.create().then(result => {
        localStorage.setItem('cartId',result.key);

        // add product to cart
      })
    }else{
      // add product to cart
    }
  }

}
