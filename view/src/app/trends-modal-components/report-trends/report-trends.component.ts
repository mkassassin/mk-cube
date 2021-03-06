import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar } from '@angular/material';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { TrendsService } from './../../service/trends/trends.service';

@Component({
  selector: 'app-report-trends',
  templateUrl: './report-trends.component.html',
  styleUrls: ['./report-trends.component.css']
})
export class ReportTrendsComponent implements OnInit {


  ActiveText = 'Harassment';
  ErrorShow: Boolean = false;

  LoginUser;

  data;
  onClose: Subject<Object>;

  constructor(public _bsModalRef: BsModalRef,
              public snackBar: MatSnackBar,
              public _Service: TrendsService,
          ) {
            this.LoginUser = JSON.parse(localStorage.getItem('CurrentUser'));
          }

  ngOnInit() {
    this.onClose = new Subject();
  }

  ActiveCategorySelect(text) {
    if (this.ActiveText !== text) {
      this.ActiveText = text;
    }
  }

  submit(value) {
    if (this.ActiveText === 'Other' && value === '') {
      this.ErrorShow = true;
      setTimeout( () => { this.ErrorShow = false; }, 4000);
    } else {
      this.data.Values.Report_Text = value;
      this.data.Values.Report_Type = this.ActiveText;
      this._Service.Report_Trends(this.data.Values)
        .subscribe( datas => {
          if (datas['Status'] === 'True' && datas['Output'] === 'True') {
                this.onClose.next({Status: 'True'});
                this._bsModalRef.hide();
          } else {
            this._bsModalRef.hide();
          }
      });
    }
  }

}
