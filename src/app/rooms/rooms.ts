export interface Room{
    totalRooms:number
    availableRoms:number;
    bookedRooms:number;
}
 export interface RoomsList{
    roomNo:number,
    roomType:string,
    amentities:string,
    price:string,
    photos:string,
    checkInTime:Date,
    checkoutTime:Date,
    rating:number

}