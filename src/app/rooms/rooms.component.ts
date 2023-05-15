import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { RoomsServices } from './services/rooms-services.service';
import { Observable, Subject, filter, map, observeOn, take, tap } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class RoomsComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit  {

  ngOnChanges(changes: SimpleChanges): void {
  
    }

@ViewChild('dynamicComponent',{read:ViewContainerRef}) vcr!:ViewContainerRef; 


  roomsList: RoomsList[] = [];
  @ViewChild(RoomsListComponent) rL!:RoomsListComponent;
  sub=new Subject<RoomsList>();

  
  $test!:Observable<RoomsList>; 
  // Life Cycle Of Component
  totalbytes=0;
  ngOnInit(): void {    
    //this.$test= this.roomService.load();
    
    this.roomService.getRoomsWithOutFlux().subscribe(event=>{
      switch(event.type){
           case HttpEventType.Sent:{
             console.log("Request Sent");
             break;
           }
           case HttpEventType.ResponseHeader:{
            console.log("Request Success");
            break;
          }
          case HttpEventType.DownloadProgress:{
            console.log(this.totalbytes=+event.loaded);
            break;
          }
          case HttpEventType.Response:{
            console.log("Response come" +event.body);
            break;
          }
          

      }
    })
        
  }
 title: string = 'Room List';
  rooms: Room = {
    totalRooms: 20,
    availableRoms: 10,
    bookedRooms: 5
  };
  constructor(private roomService:RoomsServices,private cdr:ChangeDetectorRef) { }
  ngAfterViewInit(): void {

    const cmponet= this.vcr.createComponent(RoomsComponent)
   cmponet.instance.numberOfRooms=10000;
    if( this.rL.roomsList1 !=undefined){
    this.roomService.load().subscribe(d=>{
      this.rL.roomsList1=[...this.rL.roomsList1,d] 
      this.rL.cdr1.detectChanges();    
     })
    }
  }
  ngAfterContentInit(): void {
 
  }

 
  updateList(){
  
  }

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectEventOccur(roomNo: number) {
    this.roomsList = this.roomsList.filter(r => r.roomNo !== roomNo);
  }
  toggle1() {
    console.log('Too');
    this.hideRooms = !this.hideRooms;
    //  let r = (Math.random() + 1).toString(36).substring(7);
    this.title = 'Rooms List';
  }

  toggle2() {
    console.log('Too');
    this.hideRooms = !this.hideRooms;
  }

  addRoom() {
    const room: RoomsList = {
      roomNo: this.roomsList.length + 1,
      roomType: "Public",
      amentities: "Air Conditionar Free Wifi",
      price: '0',
      photos: '',
      checkInTime:  new Date(),
      checkoutTime: new Date(),
      rating: 5

    }

    // Importnat on change Detection
    this.roomsList = [...this.roomsList, room];
  }

  addRoom1(room1:RoomsList) {
    const room: RoomsList = {
      roomNo: 1,
      roomType: room1.roomType,
      amentities: "Air Conditionar Free Wifi",
      price: '0',
      photos: '',
      checkInTime:  new Date(),
      checkoutTime: new Date(),
      rating: 5

    }

    // Importnat on change Detection
    this.roomsList = [...this.roomsList, room];
  }

}
function next(value: RoomsList): void {
  throw new Error('Function not implemented.');
}

