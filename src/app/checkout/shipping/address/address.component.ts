import { Component, OnInit } from '@angular/core';
import { AddressService, Address } from '../../../shared';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsStateService } from '../../../shared/services/us-state.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addresses: Address[];
  usStates: string[];

  selectedShippingAddress: Address;
  selectedBillingAddress: Address;

  shippingAddressForm: FormGroup;
  billingAddressForm: FormGroup;

  useDifferentBillingAddress: boolean = false;

  constructor(
    private addressService: AddressService,
    private fb: FormBuilder,
    private usStateService: UsStateService
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
}
