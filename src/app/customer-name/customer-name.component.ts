import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-name',
  template: `

<h3
  class="mat-subheading-2"
 
>
  <mat-icon 
    >perm_identity</mat-icon
  ><span>&nbsp;{{ firstName | titlecase }}</span>
</h3>
    
  `,
  styleUrls: ['./customer-name.component.scss']
})
export class CustomerNameComponent implements OnInit {
  @Input()
  firstName: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
