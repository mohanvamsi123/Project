import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerPopup } from 'src/app/interface/customer-popup';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomersService} from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  profileForm!: FormGroup;
  profile:any;
  state:any;
  constructor( public dialogRef: MatDialogRef<CustomersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerPopup,private fb: FormBuilder,private customeraction:CustomersService) {
      console.log(data);
      console.log(data?.action)
      console.log(data?.input);
      this.state=data?.action
      this.profile=data?.input
     }

  ngOnInit(): void {
    this.profileForm=this.fb.group({
      name:new FormControl(this.profile?.firstName,[Validators.required]),
      mobile:new FormControl(this.profile?.phone_no,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      city:new FormControl(this.profile?.address?.city,[Validators.required]),
      store:new FormControl(this.profile?.address?.shopname)
    })
  }

  submit = (data:any) => {
    //console.log(this.profileForm.value);
    if(data=='add'){
    this.customeraction.newCustomer(this.profileForm.value).subscribe((data:any)=>{
      this.dialogRef.close({"status":"closed","type":"response","data":data})
    })
  }else if(data=='edit'){
    this.customeraction.editCustomer(this.profile.u_id,this.profileForm.value).subscribe((data:any)=>{
      this.dialogRef.close({"status":"closed","type":"response","data":data})
    })
  }
  }

  close = () => {
    this.dialogRef.close({"status":"closed","type":"manual","data":undefined})
  }

  change_state = () => {
    console.log("edit");
    this.state='edit';
  }
}
