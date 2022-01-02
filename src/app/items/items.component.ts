import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  addItem!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addItem=this.fb.group({
      item_Name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      
    })
  }

  submit(){
     
  }

}
