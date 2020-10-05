import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component'

const routes: Routes = [
  {path:'book',component:BookAppointmentComponent},
  {path:'display', component:DisplayComponent},
  {path:'login',component:LoginComponent},
  
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



//,{path:'**',component:LoginComponent}