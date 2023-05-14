import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective  implements OnInit{

  private element:ElementRef;
  constructor(private elementRef:ElementRef,private rendrer:Renderer2) {
this.element=elementRef;
   }
  ngOnInit(): void {
    //this.element.nativeElement.style.backgroundColor = 'blue';
    this.rendrer.setStyle(
      this.element.nativeElement,'backgroundColor' , 'lightblue'  
    );
  }

  @HostListener('mouseenter') onMouseEnter(){
    
  }


}
