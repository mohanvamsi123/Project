import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListOption } from '@angular/material/list/selection-list';
import { Observable } from 'rxjs';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-sale-dates',
  templateUrl: './sale-dates.component.html',
  styleUrls: ['./sale-dates.component.scss']
})
export class SaleDatesComponent implements OnInit {
  @Input()
  personId!: number;
  getDates$!: Observable<any>;
  @Output() selectedDate = new EventEmitter<string>();

  constructor(private service:CustomersService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.personId){
      this.getSalesDates(this.personId);
    }
  }
  getSalesDates(PersonId:number){
    this.getDates$ = this.service.getDistinctDates(PersonId);
  }

  onSelection(selectedDate:any){
       console.log(selectedDate.option.value);
       this.selectedDate.emit(selectedDate.option.value);
  }

}
