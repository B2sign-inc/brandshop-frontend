import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmailMessage, EmailMessageService } from '../../../shared';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

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
