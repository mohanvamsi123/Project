import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeObserverService {
  ro!: ResizeObserver;
  constructor() { }

  resizeObserver(element:Element,fun:Function){
     this.ro=new ResizeObserver(entries=>{
      for(let entry of entries){
          console.log(entry.contentRect.width);
          fun(entry.contentRect.height,entry.contentRect.width);
      }
    })
    this.ro.observe(element);
  }
  unsubscribeObserver(element:Element){
    this.ro.unobserve(element);
  }
  observeElement(element:Element,fun:any){
    console.log(fun);
    this.resizeObserver(element,fun);
  }



}
