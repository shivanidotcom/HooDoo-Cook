import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoaComponent } from './goa/goa.component';
import { HeaderComponent } from './header/header.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { LocationComponent } from './location/location.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { SearchlocationComponent } from './searchlocation/searchlocation.component';




const routes: Routes = [
  {path: '',component:HeaderComponent},
  {path: 'home',component:HeaderComponent},
  {path: 'mumbai',component:MumbaiComponent},
  {path: 'location',component:LocationComponent},
  {path: 'bangalore',component:HeaderComponent},
  {path: 'hyderabad',component:HyderabadComponent},
  {path: 'karnataka',component:KarnatakaComponent},
  {path: 'goa',component:GoaComponent},
  {path: 'searchlocation',component:SearchlocationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
