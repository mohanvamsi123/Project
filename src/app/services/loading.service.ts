import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }


  start(){
     this.loader.next(true);
  }
  end(){
    this.loader.next(false);

  }
}
