import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../../../shared';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  limit: number = 15;
  page: number = 1;
  total: number;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    const params = {
      page: this.page,
      limit: this.limit,
    };

    this.orderService.query(params).subscribe(data => {
      this.orders = data['data'];
      this.total = data['meta']['total'];
    })
  }

  paginatorOnChange($event) {
    this.limit = $event.pageSize;
    this.page = $event.pageIndex + 1;
    this.load();
  }
}
