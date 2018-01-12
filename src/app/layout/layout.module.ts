import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
