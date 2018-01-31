import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmailMessageService } from '../../shared/services';
import { EmailMessage } from '../../shared/models';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {

  emailMessage: EmailMessage;
  private _emailMessageId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private emailMessageService: EmailMessageService,
  ) { }

  ngOnInit() {
    this.emailMessageService.get(this.emailMessageId()).subscribe(
      data => {
        this.emailMessage = data['data'];
      },
      error => {
        this.router.navigate(['message']);
      }
    );
  }

  emailMessageId(): number {
    if (!this._emailMessageId) {
      this._emailMessageId = +this.activatedRoute.snapshot.paramMap.get('id');
    }
    return this._emailMessageId;
  }
}
