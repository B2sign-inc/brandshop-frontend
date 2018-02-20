import { Component, OnInit } from '@angular/core';
import { AddressService, Address, ShippingMethod, ShippingMethodService, UsStateService, OrderService } from '../../shared';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  addresses: Address[];
  usStates: string[];

  selectedShippingAddress: Address;
  selectedBillingAddress: Address;

  shippingAddressForm: FormGroup;
  billingAddressForm: FormGroup;

  useDifferentBillingAddress: boolean = false;

  shippingMethods: ShippingMethod[];

  form: FormGroup;

  constructor(
    private addressService: AddressService,
    private fb: FormBuilder,
    private usStateService: UsStateService,
    private shippingMethodService: ShippingMethodService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.usStateService.getStates().subscribe(usStates => this.usStates = usStates);

    this.form = this.fb.group({
      shipping: this.initAddressFormValidator(this.createAddressForm()),
      billing: this.createAddressForm(),
      use_different_billing_address: [false],
      shipping_method_id: ['', Validators.required]
    });
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
      this.form.patchValue({shipping_method_id: this.shippingMethods[0].id});
    });

    this.form.get('use_different_billing_address').valueChanges.subscribe(value => {
      if (value) {
        this.initAddressFormValidator(this.form.get('billing'));
      } else {
        this.removeAllAddressFormValidator(this.form.get('billing'));
      }
    })
  }


  createAddressForm() {
    return this.fb.group({
      first_name: ['', []],
      last_name: ['', []],
      street_address: ['', []],
      extra_address: ['', []],
      city: ['', []],
      state: ['', []],
      postcode: ['', []],
      telephone: ['', []],
      id: ['', []],
    });
  }

  shippingAddressChange($event) {
    this.setShippingAddressFormValues($event.value);
  }

  billingAddressChange($event) {
    this.setBillingAddressFormValues($event.value);
  }

  initAddressFormValidator(ac: AbstractControl): AbstractControl {
    ac.get('first_name').setValidators([Validators.required]);
    ac.get('last_name').setValidators([Validators.required]);
    ac.get('street_address').setValidators([Validators.required]);
    ac.get('city').setValidators([Validators.required]);
    ac.get('state').setValidators([Validators.required]);
    ac.get('postcode').setValidators([Validators.required]);
    ac.get('telephone').setValidators([Validators.required]);
    return ac;
  }

  removeAllAddressFormValidator(ac: AbstractControl): AbstractControl {
    ac.get('first_name').setValidators(null);
    ac.get('last_name').setValidators(null);
    ac.get('street_address').setValidators(null);
    ac.get('city').setValidators(null);
    ac.get('state').setValidators(null);
    ac.get('postcode').setValidators(null);
    ac.get('telephone').setValidators(null);
    return ac;
  }

  createShippingAddressForm(): void {
    this.shippingAddressForm = this.createAddressForm();
  }

  createBillingAddressForm(): void {
    this.billingAddressForm = this.createAddressForm();
  }

  setAddressFormValues(ac: AbstractControl, address: Address) {
    ac.setValue({
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
    this.setAddressFormValues(this.form.get('shipping'), address);
  }

  setBillingAddressFormValues(address: Address) {
    this.setAddressFormValues(this.form.get('billing'), address);
  }

  placeOrder() {
    this.orderService.placeOrder(this.form.value).subscribe(
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
        this.form.get(field).setErrors({ custom: errors[field].join(' ') })
      }
    }
  }

}
