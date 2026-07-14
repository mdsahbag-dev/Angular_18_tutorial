import { Component, OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  imports: [],
  templateUrl: './lifecycle-event.html',
  styleUrl: './lifecycle-event.css',
})
export class LifecycleEvent implements OnInit, DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy {

  firstName: string;

  constructor(){
    console.log("constructor")
    this.firstName = '';
  }
 
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngDoCheck(): void {
      console.log("ngDoCheck")
  }
   ngAfterViewInit(): void {
      console.log("ngAfterViewInit")
   }
   ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked")
   }
   ngAfterContentInit(): void {
      console.log("ngAfterContentInit")
   }
   ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked")
   }
   ngOnDestroy(): void {
      console.log("ngOnDestroy ")
   }

}
