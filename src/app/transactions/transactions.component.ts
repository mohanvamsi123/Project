import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetCustomer } from '../interface/get-customer';
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
  personId!: number;
  userDetails!: GetCustomer;
  formattedItems: Array<any>=[];
  selectedDate!: string;
  constructor(private route: ActivatedRoute,private service:CustomersService) { }

  ngOnInit(): void {
    this.userDetails=this.route?.snapshot?.data['getprofile'];
    this.personId=this.route?.snapshot?.data['getprofile']?.u_id;
    this.getSalesDates(this.route?.snapshot?.data['getprofile']?.u_id);
  }

  getSalesDates(PersonId:number){
    this.getDates$ = this.service.getDistinctDates(PersonId);
  }

  fetchInvoiceData(selectedDate:string){
    this.selectedDate=selectedDate;
    this.service.getTransByDateandID(this.personId,selectedDate).subscribe((items:any)=>{
      let operationalArray=[];
      for(let item of items){
        operationalArray.push({
          "date":item.createdAt,
          "name":item.item.item_Name,
          "quantity":item.item_Qty,
          "unit_cost":item.item_Price
        });
      }
      this.formattedItems=operationalArray;
    })
  }
}
