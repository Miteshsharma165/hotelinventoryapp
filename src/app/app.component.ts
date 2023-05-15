import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template:`<p>THis is inline</p>`,
  //styles:[`p{color:red}`],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  // this is beast use when view is Intialized properly
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  title = 'hotelinventoryapp';

@ViewChild("mainTitle",{static:true}) viewChild!:ElementRef;

@ViewChild("main",{static:true}) viewChildmain!:ElementRef;

ngOnInit(): void {
//    this.viewChild.nativeElement.innerText="Test";
    //console.log(this.viewChildmain.nativeElement.title='Test 2');
}


toggle(toogle:boolean){
this.opened=toogle;
}
opened=false;
  role='admin';
}
