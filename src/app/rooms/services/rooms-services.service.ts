import { Injectable, OnInit } from '@angular/core';
import { RoomsList } from '../rooms';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsServices {

  getStr$=this.http.get<RoomsList>("http://192.168.1.6:5000",{responseType:'text' as 'json'})

  constructor(private http: HttpClient) { }
  
  getItems(): Observable<RoomsList> {

   

    return this.http.get<RoomsList>("http://192.168.1.6:5000", { responseType: 'text' as 'json' });
  }  
  

  roomsList: RoomsList[]=[];

  load():Observable<RoomsList>{
    return new Observable<RoomsList>((observer) => {      
      let eventSource = new EventSource("http://192.168.1.6:5000");
      eventSource.onmessage = (event) => {
        console.debug('Received event: ', event);
        let json = JSON.parse(event.data);       
      observer.next(json)
              };
      eventSource.onerror = (error) => {
         if(eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
    }
    });
    
  }
  

  getRoomsWithOutFlux(){
    const request=new HttpRequest('GET','http://192.168.1.6:5000/getRoomsWithOutFlux');
    return this.http.request(request); 
  }



  getRooms():Observable<RoomsList> {
    const headers = new HttpHeaders().set( 'Accept', 'text/event-stream'  );
    //return this.http.get<any>(this.apiUrl, { responseType: 'text', headers: { 'Accept': 'text/event-stream' } });
  return  this.http.get<RoomsList>("http://192.168.1.6:5000");          
  };

  getRoomsList() {      
      return this.roomsList;
    };
}



