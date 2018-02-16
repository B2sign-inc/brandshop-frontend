import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddressListComponent } from './address-list/address-list.component';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';

import { AddressService } from '../../shared/services/';

import {
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatPaginatorModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  entryComponents: [AddressDialogComponent],
  providers: [AddressService],
  declarations: [AddressListComponent, AddressDialogComponent]
})
export class AddressBookModule { }
