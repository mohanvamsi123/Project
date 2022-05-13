import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetCustomer } from 'src/app/interface/get-customer';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-payment-popup',
  templateUrl: './payment-popup.component.html',
  styleUrls: ['./payment-popup.component.scss']
})
export class PaymentPopupComponent implements OnInit {
  transactionForm!:FormGroup;
  userDetails: GetCustomer;
  addLoader:boolean=false;

  constructor(public dialogRef: MatDialogRef<PaymentPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {personDetails:GetCustomer},
              private fb: FormBuilder,
              private customeraction:CustomersService) 
  {
      this.userDetails=data?.personDetails;
  }

  ngOnInit(): void {
    this.transactionForm=this.fb.group({
      person:new FormControl(this.userDetails.u_id,[Validators.required]),
      transaction_date:new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required,Validators.min(1)]),
    })

  }

  submit(){
    this.addLoader = true;
    this.customeraction.postTransaction(this.transactionForm.value).subscribe((data:any)=>{
       console.log(data);
       this.addLoader = false;
    });
  }

  close = () => {
    this.dialogRef.close();
  }
}
