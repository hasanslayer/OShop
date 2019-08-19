import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order$;
  constructor(
    private orderServie: OrderService,
    private authService: AuthService
  ) {
    this.order$ = this.authService.user$.switchMap(u =>
      orderServie.getOrdersByUser(u.uid)
    );
  }

  ngOnInit() {}
}
