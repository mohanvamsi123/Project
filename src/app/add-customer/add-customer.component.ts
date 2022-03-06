import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomersComponent } from '../popup/customers/customers.component';
import {CustomersService} from '../services/customers.service';
import {ActivatedRoute, Router} from '@angular/router';
import { GetCustomer } from '../interface/get-customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customersList:any=[];
  constructor(public dialog: MatDialog,private customeraction:CustomersService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.getCustomers();
    this.customersList = this.route?.snapshot?.data['getCustomers'];

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

  navigate = (data:any) => {
    this.router.navigate(['/customers/sales'], { queryParams: { userid:data.u_id } ,relativeTo:this.route});
  }

  getCustomers = () => {
    this.customeraction.getCustomer().subscribe((data:GetCustomer[] | GetCustomer)=>{
      console.log(data);
      this.customersList=data;

    })
  }

}
