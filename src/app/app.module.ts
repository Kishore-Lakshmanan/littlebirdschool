import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule ,ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Rou } from "./route";
// import { AngularFireModule } from "angularfire2";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SchooleventsComponent } from "./schoolevents/schoolevents.component";
import { RepublicdayComponent } from "./schoolevents/republicday/republicday.component";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentService } from './student.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// export const firebaseConfig = {
//   apiKey: "AIzaSyBBhFToxpy14wjdaPLQOcBrtrM1ssxfa98",
//   authDomain: "schoolstudentlist.firebaseapp.com",
//   databaseURL: "https://schoolstudentlist.firebaseio.com",
//   projectId: "schoolstudentlist",
//   storageBucket: "schoolstudentlist.appspot.com",
//   messagingSenderId: "397378227143",
//   appId: "1:397378227143:web:c13681c2e66e9c73b6e7e2",
//   measurementId: "G-28RMFP2CBP"
// };
@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule, RouterModule.forRoot(Rou)],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SchooleventsComponent,
    RepublicdayComponent,
    StudentListComponent,
    StudentDetailComponent,
    LoginComponent,
    RegisterComponent,
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [AppComponent],
  providers: [StudentService]
})
export class AppModule {}
