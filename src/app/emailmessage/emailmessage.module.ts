import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailmessageRoutingModule } from './emailmessage-routing.module';

import { MessageComponent } from './message/message.component';
import { MessageViewComponent } from './message-view/message-view.component';

import { EmailMessageService } from '../shared/services';

import {
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    EmailmessageRoutingModule,

    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [EmailMessageService],
  declarations: [MessageComponent, MessageViewComponent]
})
export class EmailmessageModule { }
