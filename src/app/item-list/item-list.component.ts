import { Component, Input, OnInit } from '@angular/core';
import { GetItems } from '../interface/get-items';
import {CustomersService} from '../services/customers.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
//itemDetails:any=[];
@Input() itemsArray:Array<any>=[];
/*@Input() 
set itemsArray(value:any){
  console.log(value);
  this.itemDetails=value;
}*/


  constructor(private service:CustomersService) { }

  ngOnInit(): void {
    this.getItems();
  }

  itemstatus(data:any){
   this.service.updateStatus(data.item_Id).subscribe((data:any)=>{
     this.getItems();

   })
  }

  getItems(){
    this.service.getItems().subscribe((data:GetItems[])=>{
      //console.log(data);
      this.itemsArray=data;
    })

  }

}
