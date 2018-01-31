import { Component, OnInit } from '@angular/core';

import { EmailMessage } from '../../shared/models';
import { EmailMessageService } from '../../shared/services';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(
    private emailMessageService: EmailMessageService
  ) { }

  ngOnInit() {
    this.runQuery(1);
  }

  currentPage = 1;
  perPage = 15;
  pageTotal: 1;
  pageFrom = 0;
  pageTo = 0;
  totalPages: Array<number> = [1];

  emailMessages: EmailMessage[];

  setPageTo(pageNum) {
    this.currentPage = pageNum;
    this.runQuery(pageNum);
  }

  runQuery(pageNum) {
    this.emailMessages = [];

    this.emailMessageService.query({ 'page': pageNum }).subscribe(
      data => {
        console.log(data);
        if (data) {
          this.emailMessages = data['data'];
          this.currentPage = data['meta'].current_page;
          this.perPage = data['meta'].per_page;
          this.pageFrom = data['meta'].from;
          this.pageTo = data['meta'].to;
          this.pageTotal = data['meta'].total;
          this.totalPages = Array.from(new Array(Math.ceil(this.pageTotal / this.perPage)), (val, index) => index + 1);
        }
      }
    );
  }
}
