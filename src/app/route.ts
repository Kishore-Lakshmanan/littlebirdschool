import {Routes} from '@angular/Router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import {SchooleventsComponent} from "./schoolevents/schoolevents.component";
import {RepublicdayComponent} from "./schoolevents/republicday/republicday.component"
import { StudentListComponent } from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const Rou : Routes=[
  {path:'Home',component:HomeComponent},
 { path:'About',component:AboutComponent},
 {path:'SchoolEvents',component:SchooleventsComponent},
  {path:'SchoolEvents/republicday',component:RepublicdayComponent},
  {path:'student-list',component:StudentListComponent},
  {path:'student-detail',component:StudentDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
{ path: '**', redirectTo: 'home', pathMatch: 'full' }
]