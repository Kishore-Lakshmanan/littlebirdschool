import { Injectable } from '@angular/core';
import {Studentdetails} from './studentdetails';
import {studDeta,Individual_data} from './testing-student-list';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class StudentService {
public currentUser: Observable<User>;
  constructor() { }
tempdata:object
  get_students() :Studentdetails[]{
return studDeta;

  }

  getStudentbyId(id){
    return Individual_data;
  }

}