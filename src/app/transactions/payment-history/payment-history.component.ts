import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionHistory } from 'src/app/interface/transaction-history';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  @Input() invoiceDate!:string;
  @Input() userId!:number;
  getPayments$!: Observable<TransactionHistory[]>;
  constructor(private service:CustomersService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.invoiceDate && this.userId){
      console.log(this.invoiceDate);
      console.log(this.userId);
      this.getPayments();
    }
  }

  getPayments(){
    console.log("Hello");
   this.getPayments$=this.service.getPaymentHistory(this.invoiceDate,this.userId);
  }

}
