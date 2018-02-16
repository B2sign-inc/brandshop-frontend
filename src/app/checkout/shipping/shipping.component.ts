import { Component, OnInit } from '@angular/core';
import { AddressService, Address, ShippingMethod, ShippingMethodService, UsStateService, OrderService } from '../../shared';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  get canPlaceOrder(): boolean {
    return (!this.billingAddressForm.valid || !this.shippingAddressForm.valid) && !!this.selectedShippingMethod;
  }

  addresses: Address[];
  usStates: string[];

  selectedShippingAddress: Address;
  selectedBillingAddress: Address;

  shippingAddressForm: FormGroup;
  billingAddressForm: FormGroup;

  useDifferentBillingAddress: boolean = false;

  selectedShippingMethod: ShippingMethod;

  shippingMethods: ShippingMethod[];

  constructor(
    private addressService: AddressService,
    private fb: FormBuilder,
    private usStateService: UsStateService,
    private shippingMethodService: ShippingMethodService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.usStateService.getStates().subscribe(usStates => this.usStates = usStates);
    this.createShippingAddressForm();
    this.createBillingAddressForm();
  }

  ngOnInit() {
    this.addressService.all().subscribe(addresses => {
      this.addresses = addresses.map(function (address) {
        return Address.cast(address);
      });

      const defaultShippingAddress = this.addresses.find((address) => address['isDefaultShippingAddress'] === true)
      if (defaultShippingAddress) {
        this.selectedShippingAddress = defaultShippingAddress;
        this.setShippingAddressFormValues(defaultShippingAddress);
      }

      const defaultBillingAddress = this.addresses.find((address) => address['isDefaultBillingAddress'] === true);
      if (defaultBillingAddress) {
        this.selectedBillingAddress = defaultBillingAddress;
        this.setBillingAddressFormValues(defaultBillingAddress);
      }
    });

    this.shippingMethodService.all().subscribe(data => {
      this.shippingMethods = data['data'];
      this.selectedShippingMethod = this.shippingMethods[0];
    });
  }

  shippingAddressChange($event) {
    this.setShippingAddressFormValues($event.value);
  }

  billingAddressChange($event) {
    this.setBillingAddressFormValues($event.value);
  }

  createAddressForm() {
    return this.fb.group({
      first_name: ['', [Validators.required, Validators.min(3)]],
      last_name: ['', [Validators.required, Validators.min(3)]],
      street_address: ['', [Validators.required, Validators.min(3)]],
      extra_address: ['', []],
      city: ['', [Validators.required, Validators.min(3)]],
      state: ['', [Validators.required, Validators.min(3)]],
      postcode: ['', [Validators.required, Validators.min(3)]],
      telephone: ['', []],
      id: ['', []],
    });
  }

  createShippingAddressForm(): void {
    this.shippingAddressForm = this.createAddressForm();
  }

  createBillingAddressForm(): void {
    this.billingAddressForm = this.createAddressForm();
  }

  setAddressFormValues(formGroup: FormGroup, address: Address) {
    formGroup.setValue({
      id: address.id,
      first_name: address.first_name,
      last_name: address.last_name,
      street_address: address.street_address,
      extra_address: address.extra_address,
      city: address.city,
      state: address.state,
      postcode: address.postcode,
      telephone: address.telephone,
    });
  }

  setShippingAddressFormValues(address: Address) {
    this.setAddressFormValues(this.shippingAddressForm, address);
  }

  setBillingAddressFormValues(address: Address) {
    this.setAddressFormValues(this.billingAddressForm, address);
  }

  placeOrder() {
    let params = {
      shipping: this.shippingAddressForm.value,
      use_different_billing_address: this.useDifferentBillingAddress,
      billing: this.billingAddressForm.value,
      shipping_method_id: this.selectedShippingMethod.id,
    }

    this.orderService.placeOrder(params).subscribe(
      data => {
        const order = data['data'];
        this.router.navigate([`checkout/${order.id}/payment`]);
      }, error => {
        this.renderFormError(error);
      }
    );
  }

  renderFormError(error) {
    const errors = error.error ? error.error.errors : null;
    if (errors) {
      for (let field in errors) {
        let fields = field.split('.');
        if (fields[0] === 'shipping') {
          this.shippingAddressForm.get(fields[1]).setErrors({ custom: errors[field].join(' ') })
        } else if (fields[0] === 'billing') {
          this.billingAddressForm.get(fields[1]).setErrors({ custom: errors[field].join(' ') })
        }
      }
    }
  }

}
