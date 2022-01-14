import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnChanges, OnInit, Output,EventEmitter} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GetSales } from '../interface/get-sales';




@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss']
})
export class SalesTableComponent implements OnInit,OnChanges,AfterViewChecked{
  @Input() columnHeaders:string[]=[];
  @Input() columnsData:GetSales[]=[];
  @Output() itemsList:EventEmitter<Array<{name:string,cost:number,quantity:number}>>=new EventEmitter<Array<{name:string,cost:number,quantity:number}>>();
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource:GetSales[] = [];
  dataSource=new MatTableDataSource<GetSales>([]);
  selection = new SelectionModel<GetSales>(true, []);
  buttonStatus:boolean=false;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();

  
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log(this.columnsData);
  this.dataSource.data=this.columnsData;
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    if(this.selection.selected.length>0){
      this.buttonStatus=true;
    }else{
      this.buttonStatus=false;
    }
    return numSelected === numRows;
    
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: GetSales): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  submit(){
    const itemsData=this.selection.selected.map((data:GetSales)=>{
     return {
        "name":data.i_name,
        "quantity":data.qty,
        "cost":data.price,
     }
   })
   this.itemsList.emit(itemsData);
  }

  /*
  generateInvoice(itemsData:any){
    const body={
      "from":"SVF Flower Stall\nRaitu Bazar\nNear RTC Bust Stand\nGuntur\nAndhra Pradesh\nIndia-522002",
      "to":"Guru Mohan Vamsi Darisi\nGuntur\nAndhra Pradesh\nIndia-522002",
      "currency":"INR",
      "shipping_title":"Previous Balance",
      "items":itemsData,
    "custom_fields": [
      {
        "name": "Account Number",
        "value": "CUST-456"
      }
    ],
    "fields": {
      "discounts": false,
      "shipping": true
    },
    
    "shipping": 15,
    "notes": "Thanks for being an awesome customer!"
  
  }
  }

*/
}
