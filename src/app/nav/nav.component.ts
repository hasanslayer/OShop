import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount: number = 0;

  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => (this.appUser = appUser));
    let cart$ = await this.shoppingCartService.getCart();

    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for (let productId in cart.items) {
        this.shoppingCartItemCount += cart.items[productId].quantity;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
