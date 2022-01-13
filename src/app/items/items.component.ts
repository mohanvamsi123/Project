import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {formatDate} from '@angular/common';
import { CustomersService} from '../services/customers.service';
import { GetItems } from '../interface/get-items';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  addItem!: FormGroup;
  itemDetails:Array<any>=[];

  constructor(private fb: FormBuilder,private service:CustomersService) { }

  ngOnInit(): void {
    this.addItem=this.fb.group({
      item_Name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      
    })
  }

  submit(){
   const output=this.addItem.value;
   //output['createdAt']=formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
   output['item_Status']=true;
   //output['updatedAt']=formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
   this.service.postItems(output).subscribe((data:any)=>{
     console.log(data);
     this.getItems();
   })
  }
  getItems(){
    this.service.getItems().subscribe((data:GetItems[])=>{
      console.log(data);
      this.itemDetails=[...data];
      this.addItem.reset();
    })

  }

}
