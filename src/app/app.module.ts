import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './rooms/header/header.component';
import { FooterComponent } from './rooms/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsbookingComponent } from './rooms/roomsbooking/roomsbooking.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {DialogComponent } from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';








@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,  
    ContainerComponent,
      HeaderComponent,
       FooterComponent,
       AppNavComponent,
       EmployeeComponent,
       RoomsbookingComponent,
       AddRoomsComponent,
       DialogComponent,
       LoginComponent,
       HoverDirective,      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule
    
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'hi-IN' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
