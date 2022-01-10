import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-reg-sales',
  templateUrl: './reg-sales.component.html',
  styleUrls: ['./reg-sales.component.scss']
})
export class RegSalesComponent implements OnInit {
  param1: any;
  salesForm!: FormGroup;
  items:Array<any>=[];

  constructor(private route: ActivatedRoute,private fb:FormBuilder,private service:CustomersService) { 
    this.route.queryParams.subscribe(params => {
      this.param1 = params['userid'];
      console.log(this.param1);
     
  });
  }

  ngOnInit(): void {
    this.salesForm=this.fb.group({
      date:new FormControl(new Date(),[Validators.required]),
      item:new FormControl('',[Validators.required]),
      quantity:new FormControl('',[Validators.required,Validators.min(1)]),
      price:new FormControl('',[Validators.required,Validators.min(1)])
    })

    this.getItems();
  }


  getItems(){
    this.service.getItems().pipe(map((data:any)=>data.filter((output:any)=>output.item_Status===true))).subscribe((data:any)=>{
      console.log(data);
      this.items=data;
    })
  }
}
