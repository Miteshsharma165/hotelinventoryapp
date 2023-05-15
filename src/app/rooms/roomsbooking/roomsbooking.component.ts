import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-roomsbooking',
  templateUrl: './roomsbooking.component.html',
  styleUrls: ['./roomsbooking.component.css']
})
export class RoomsbookingComponent implements OnInit{
//roomNo$=this.router.params.pipe(map((param)=> param['roomId']));
roomNo$=this.router.paramMap.pipe(map((param)=> param.get('roomId')));
  constructor(private router:ActivatedRoute){}
  ngOnInit(): void {
   
  }

}
