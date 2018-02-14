import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from '../../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  order: Order;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {order: Order}) => {
      this.order = data.order;
    })
  }
}
