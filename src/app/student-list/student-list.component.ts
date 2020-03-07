import { Component, OnInit } from "@angular/core";
import { Studentdetails } from "../studentdetails";
import {studDeta} from "../testing-student-list";
import { StudentService } from '../student.service';
import { Observable, Subject } from 'rxjs';
import { Subscription,Subscriber } from 'rxjs';



@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {

constructor(private stud_serv:StudentService) {}
data:any;
temparray:ArrayBufferConstructor
studentList = studDeta;
  selectedStudDetail: Studentdetails;
  onSelect(id) {
    console.log(id)
   this.temparray= this.stud_serv.getStudentbyId(id)
  //  .subscribe(
  //    data => { this.temparray = data})
     console.log(this.temparray)
      }
    
    
  

  

  ngOnInit() {}
}
