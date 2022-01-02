import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomersComponent } from '../popup/customers/customers.component';
import {CustomersService} from '../services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customersList:any=[];
  constructor(public dialog: MatDialog,private customeraction:CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  customer_action=(status:any,value:any,background:boolean) => {
    const dialogRef = this.dialog.open(CustomersComponent, {
      width: '300px',height:'420px',
      disableClose: background,
      data: {action: status,input:value},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result?.type=="response"){
        this.getCustomers();
      }
    });
    
  }

  getCustomers = () => {
    this.customeraction.getCustomer().subscribe((data:any)=>{
      console.log(data);
      this.customersList=data;

    })
  }

}
