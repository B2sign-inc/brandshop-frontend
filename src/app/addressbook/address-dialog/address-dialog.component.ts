import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.scss']
})
export class AddressDialogComponent {

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createForm();
  }

  onNoclick(): void {
    this.dialogRef.close();
  }

  addressForm: FormGroup;

  createForm(): void {
    this.addressForm = this.fb.group({
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

    if (this.data.id) {
      this.addressForm.setValue({
        id: this.data.id,
        first_name: this.data.first_name,
        last_name: this.data.last_name,
        street_address: this.data.street_address,
        extra_address: this.data.extra_address,
        city: this.data.city,
        state: this.data.state,
        postcode: this.data.postcode,
        telephone: this.data.telephone,
      });
    }
  }
}
