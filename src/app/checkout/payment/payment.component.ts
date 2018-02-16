import { Component, OnInit } from '@angular/core';
import { Order, OrderService, MessageService, PaymentService } from '../../shared';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as BraintreeDropin from 'braintree-web-drop-in';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  order: Order;
  token: string;
  submitting: boolean = false;

  paid: boolean = false;

  payInstance: any;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private paymentService: PaymentService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { order: Order, token: string }) => {
      this.order = data.order;
      this.token = data.token;
    })

    this.createBraintreeDropin();
  }

  createBraintreeDropin() {
    BraintreeDropin.create({
      authorization: this.token,
      selector: '#bt-dropin',
      paypal: {
        flow: 'vault'
      }
    }, (createError, instance) => {
      if (createError) {
        this.messageService.error(createError.message);
        return;
      }

      this.payInstance = instance;
    });
  }

  pay() {
    if (this.payInstance) {
      this.submitting = true;
      this.payInstance.requestPaymentMethod((error, payload) => {
        if (error) {
          this.messageService.error(error.message);
          this.submitting = false;
          return;
        }

        this.paymentService
          .paid(this.order.id, payload.nonce)
          .finally(() => this.submitting = false)
          .subscribe(data => {
            this.paid = true;
          });
      });
    }
  }
}
