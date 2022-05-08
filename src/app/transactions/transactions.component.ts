import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomersService} from '../services/customers.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  currentDate = new Date();
  getDates$!: Observable<any>;
  amount=2000;
  columnHeaders:Array<any>=["Transaction Date", "Type" , "Amount"];
  dataSource:Array<any>=[
    {
      createdAt:new Date(),
      type:"Purchased",
      amount:"2000"
    },
    {
      createdAt:new Date(),
      type:"Received",
      amount:"2000"
    }
  ];
  constructor(private route: ActivatedRoute,private service:CustomersService) { }

  ngOnInit(): void {
    console.log(this.route?.snapshot?.data['getprofile']);
    this.getSalesDates(this.route?.snapshot?.data['getprofile']?.u_id);
  }

  getSalesDates(PersonId:number){
    this.getDates$ = this.service.getDistinctDates(PersonId);
  }
}
