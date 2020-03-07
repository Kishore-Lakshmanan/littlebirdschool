import { Component, OnInit, Input } from "@angular/core";
import { Studentdetails } from "../studentdetails";

@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.css"]
})
export class StudentDetailComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log(this.indDet,"testing1")
  }
  @Input() sd: Studentdetails;

  @Input() indDet

  
}
