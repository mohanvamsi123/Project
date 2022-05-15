import { Component, Input, OnInit } from '@angular/core';
import { GetCustomer } from '../interface/get-customer';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  @Input() to: any;
  @Input()
  from!: GetCustomer;
  @Input() itemsList!: Array<any>;
  @Input() prevBalance: number = 0;
  todayDate: Date | undefined;
  totalPrice: any;
  @Input() individualDates:boolean=false;
  @Input() invoiceDate:string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.todayDate = new Date();
  }

  ngOnChanges(): void {
    //console.log(this.itemsList);

    if (this.itemsList) {
      if (this.itemsList.length > 1) {
        this.totalPrice = this.itemsList.map((output)=>(output.quantity*output.unit_cost)).reduce((prev,curr)=>{
          return prev+curr
        })
      } else {
        this.totalPrice = this.itemsList[0]?.quantity * this.itemsList[0]?.unit_cost;
      }
      //console.log(this.totalPrice);

    }
  }

}
