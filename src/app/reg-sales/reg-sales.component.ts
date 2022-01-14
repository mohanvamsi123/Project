import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { GetCustomer } from '../interface/get-customer';
import { GetItems } from '../interface/get-items';
import { GetSales } from '../interface/get-sales';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-reg-sales',
  templateUrl: './reg-sales.component.html',
  styleUrls: ['./reg-sales.component.scss']
})
export class RegSalesComponent implements OnInit {
  userdetails!:GetCustomer;
  salesForm!: FormGroup;
  items:Array<any>=[];
  columnHeaderArray:string[]=["select","Date","Item","Quantity","Unit Price","Total Price"];
  columnsDataArray:GetSales[]=[];

  constructor(private route: ActivatedRoute,private fb:FormBuilder,private service:CustomersService) { 
    /*this.route.queryParams.subscribe(params => {
      this.param1 = params['userid'];
      console.log(this.param1);
  });*/
      
  }

  ngOnInit(): void {
    this.salesForm=this.fb.group({
      createdAt:new FormControl(new Date(),[Validators.required]),
      item:new FormControl('',[Validators.required]),
      item_Qty:new FormControl('',[Validators.required,Validators.min(1)]),
      item_Price:new FormControl('',[Validators.required,Validators.min(1)])
    })
    this.userdetails=this.route?.snapshot?.data['getprofile'];
    console.log(this.userdetails)
    this.getItems();
    this.getSales(this.userdetails?.u_id);
  }

  submit(sidenav:MatDrawer){
    console.log(this.salesForm.value);
    const output=this.salesForm.value;
    output["person"]=this.userdetails.u_id;
    this.service.regSales(output).subscribe((data:any)=>{
      console.log(data);
      sidenav.close();
      this.getSales(this.userdetails?.u_id);
      this.salesForm.reset({ createdAt: new Date()});
    })
  }

  getSales(userid:number){
    this.service.getSales(userid).subscribe((data:GetSales[])=>{
      console.log(data);
      this.columnsDataArray=[...data];
    })
  }
  getItems(){
    this.service.getItems().pipe(map((data:GetItems[])=>data?.filter((output:GetItems)=>output?.item_Status===true))).subscribe((data:GetItems[])=>{
      console.log(data);
      this.items=data;
    })
  }

  generateInvoice(itemsArray:any){
    const profile:string=this.userdetails.firstName+"\n"+this.userdetails.address.shopname+"\n"+this.userdetails.address.city+"\n"+
    "Andhra Pradesh\nIndia-522002";

    this.service.getInvoice(profile,itemsArray).subscribe((data:any)=>{
      console.log(data);
    })
  }
}

