import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared';
import { MessageComponent } from './message/message.component';
import { MessageViewComponent } from './message-view/message-view.component';

const routes: Routes = [
  {
    path: 'message',
    component: MessageComponent,
    canActivate: [AuthGuard],
  }, {
    path: 'message/:id',
    component: MessageViewComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailmessageRoutingModule { }
