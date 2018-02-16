import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';

import { EmailMessageService } from '../../shared/';

import {
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [EmailMessageService],
  declarations: [MessageListComponent, MessageDetailComponent]
})
export class EmailMessageModule { }
