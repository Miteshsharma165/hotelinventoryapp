import { Component, OnInit } from '@angular/core';
import { RoomsList } from '../rooms/rooms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit{
ngOnInit(): void {
//  let d=new Intl.DateTimeFormat('hi');
//    let date=d.format(new Date());
//   console.log(new Date(date));

}

constructor(private snackBar:MatSnackBar){}

room:RoomsList={
  roomNo: 0,
  roomType: '',
  amentities: '',
  price: '',
  photos: '',
  checkInTime:new Date() ,
  checkoutTime: new Date(),
  rating: 0
}
addRoom(ngForm:NgForm){
  this.snackBar.open('Form Submitted SuccessFully','undo');
  console.log(this.room)
  ngForm.resetForm({
    roomNo: 0,
    roomType: '',
    amentities: '',
    price: '',
    photos: '',
    checkInTime:new Date() ,
    checkoutTime: new Date(),
    rating: 0
  }
  );
}

}
