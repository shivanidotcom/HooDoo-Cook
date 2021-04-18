import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { SearchlocationComponent } from './searchlocation/searchlocation.component';
import { FormsModule } from '@angular/forms';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { GoaComponent } from './goa/goa.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocationComponent,
    MumbaiComponent,
    SearchlocationComponent,
    KarnatakaComponent,
    HyderabadComponent,
    GoaComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
