import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './rooms/header/header.component';
import { FooterComponent } from './rooms/footer/footer.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsbookingComponent } from './rooms/roomsbooking/roomsbooking.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path:'header',component: HeaderComponent,
  //  },
  //  {
  //   path:'footer',component:FooterComponent
  //  }
  //  ,{
  //   path:'' ,component:AppComponent
  //  }
  //  ,{
  //  
  {
    path:'' ,component:LoginComponent
   },
   {
    path:'rooms' ,component:RoomsComponent
   },
   {
    path:'footer' ,component:FooterComponent
   },
   {
    path:'emp',component:EmployeeComponent
   },
   {
    path:'rooms/:roomId',component:RoomsbookingComponent
   },
   {
    path:'room-add/add',component:AddRoomsComponent
   },
   {
    path:'**',component:HeaderComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
