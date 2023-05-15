import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  toggle!:boolean;

  @Output() toggleSideBar=new EventEmitter<boolean>();

  toggleSideBar1(){    
    let t=Math.random().toFixed();
    if(parseInt(t)>0)
      this.toggle=true
else
this.toggle=false

   this.toggleSideBar.emit(!this.toggle);
  }







}
