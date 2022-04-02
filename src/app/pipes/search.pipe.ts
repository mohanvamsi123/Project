import { Pipe, PipeTransform } from '@angular/core';
import { GetCustomer } from '../interface/get-customer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataArray: [], searchString: any): Array<any> {
    if(!dataArray){
      return [];
    }
    if (!searchString) {
      return dataArray;
    }

    if(!isNaN(searchString)){
      return dataArray.filter((data:any)=>{
        console.log(data?.phone_no == searchString);
        return data?.phone_no.toString().includes(searchString);
      });
    }else{
    return dataArray.filter((data:GetCustomer)=>{
      return data?.firstName.toLowerCase().includes(searchString.toLowerCase());
    });
  }
  }

}
