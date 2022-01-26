import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-popup',
  templateUrl: './invoice-popup.component.html',
  styleUrls: ['./invoice-popup.component.scss']
})
export class InvoicePopupComponent implements OnInit {

datas:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.datas=data;
   }

  ngOnInit(): void {
  }

}
