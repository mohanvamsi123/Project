import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnChanges, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GetSales } from '../interface/get-sales';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {formatDate} from '@angular/common';



@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss']
})
export class SalesTableComponent implements OnInit, OnChanges, AfterViewChecked {
  showSearch: boolean = false;
  @Input() columnHeaders: string[] = [];
  @Input() columnsData: GetSales[] = [];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  @Output() itemsList: EventEmitter<Array<{ name: string, unit_cost: number, quantity: number }>> = new EventEmitter<Array<{ name: string, unit_cost: number, quantity: number }>>();
  @Output() editSales: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteList: EventEmitter<any> = new EventEmitter<any>();
  @Output() filterDate: EventEmitter<{"start":string,"end":string}>=new EventEmitter<{"start":string,"end":string}>();


  dataSource = new MatTableDataSource<GetSales>([]);
  selection = new SelectionModel<GetSales>(true, []);
  buttonStatus: boolean = false;
  @ViewChild(MatSort)
  sort!: MatSort;
  form: FormGroup = new FormGroup({
    itemSearch: new FormControl()
  });


  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();


  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.form.controls['itemSearch'].valueChanges.pipe(debounceTime(1000)).subscribe(value => {

      this.searchLogic(value);
    })
  }

  ngOnChanges(): void {
    console.log(this.columnsData);
    this.dataSource.data = this.columnsData;
  }

//search logic for mat-table
  searchLogic(data: string) {
    this.dataSource.filter = data.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    if (this.selection.selected.length > 0) {
      this.buttonStatus = true;
    } else {
      this.buttonStatus = false;
    }
    return numSelected === numRows;

  }
  clearFilter() {
    this.showSearch = false;
    this.form.patchValue({ 'itemSearch': '' });

  }

  editrow(data: any) {
    console.log(data);
    this.editSales.emit(data);
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

  submit() {
    const itemsData = this.selection.selected.map((data: GetSales) => {
      return {
        "date": data.createdAt,
        "name": data.i_name,
        "quantity": data.qty,
        "unit_cost": data.price,
      }
    })
    this.itemsList.emit(itemsData);
  }

  deleteRows(){
    console.log(this.selection.selected);
    console.log(this.selection.selected.map((data:GetSales)=>data["id"]).join(","));
    this.deleteList.emit(this.selection.selected.map((data:GetSales)=>data["id"]).join(","));
  }

  dateSelected(){
    
    if(this.range.get('start')?.value && this.range.get('end')?.value){
      console.log("Date toggle closed");
      console.log(formatDate(this.range.get('start')?.value,'yyyy-MM-dd','en-US'));
      this.filterDate.emit({"start":formatDate(this.range.get('start')?.value,'yyyy-MM-dd','en-US'),
      "end":formatDate(this.range.get('end')?.value,'yyyy-MM-dd','en-US')}
      );
    }
  }
}
