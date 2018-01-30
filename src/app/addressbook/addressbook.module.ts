import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddressbookRoutingModule } from './addressbook-routing.module';
import { AddressComponent } from './address/address.component';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';

import { AddressService } from '../shared/services/';

import {
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AddressbookRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
  ],
  entryComponents: [AddressDialogComponent],
  providers: [AddressService],
  declarations: [AddressComponent, AddressDialogComponent]
})
export class AddressbookModule { }
