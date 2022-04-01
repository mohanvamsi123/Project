import { AfterContentInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {ResizeObserverService} from '../services/resize-observer.service';

@Directive({
  selector: '[appResizeObserver]'
})
export class ResizeObserverDirective implements OnDestroy,AfterContentInit {
  //@Input('appResizeObserver') generateDimensions!: Function; 
  @Output() appResizeObserver: EventEmitter<any> = new EventEmitter<any>();
  constructor(private el:ElementRef,private resizeService:ResizeObserverService) { 
      this.resizeService.observeElement(this.el.nativeElement,(height:number,width:number) =>{
          this.appResizeObserver.emit({height,width});
      });      
  }

  ngAfterContentInit(): void {
  }
  ngOnDestroy(){
     this.resizeService.unsubscribeObserver(this.el.nativeElement)
  }

}
