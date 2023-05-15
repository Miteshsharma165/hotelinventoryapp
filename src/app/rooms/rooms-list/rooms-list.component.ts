import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms';
import { Observable, Subject, map, tap } from 'rxjs';
import { RoomsServices } from '../services/rooms-services.service';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges,OnInit{
  zone: NgZone;
 cdr1:ChangeDetectorRef;
  constructor(private roomService:RoomsServices,zone:NgZone, private cdr: ChangeDetectorRef){
    this.zone=zone;
    this.cdr1=cdr;
  }

 

  @Input('title') title:string='';

  @Input('rooms')  roomsList:Observable<RoomsList> | undefined
  public roomsList1:RoomsList[]=[];
  roomsList2!:RoomsList;

  @Input('sub')  sub1=new Subject<RoomsList>();
  dr$=  this.roomService.getStr$


  // ngOnInit(): void {
  //  this.roomService.load().subscribe((data)=>{  
  //   this.roomsList1=[...this.roomsList1,data]
  //   this.cdr.detectChanges()  
  // } );
  // }

   ngOnInit(): void {   
    this.roomsList?.subscribe((data)=>{
          this.roomsList1=[...this.roomsList1,data]
          this.cdr.detectChanges();

         })

         this.sub1.next(this.roomsList1[0]);
   }


  // onchange only used when the the component has @Input decorator
  ngOnChanges(changes: SimpleChanges): void {
   if(changes['title']){
    console.log(changes['title']);
    this.title=changes['title'].currentValue.toUpperCase();
   
   }
   if(changes['rooms']){
    console.log(changes['rooms']);
   }
  }

 
  @Output('selectEvent') selectRoomEvent =new EventEmitter<number>();
  selectEvent(roomNo :number){
    this.selectRoomEvent.emit(roomNo);
  }

}