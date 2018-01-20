import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {node} from './nodeservice';


@Injectable()
export class ExtService {

  constructor(private http: HttpClient){ }
  getStudents()
  // tslint:disable-next-line:one-line
  {
    

        return this.http.get('http://localhost:8080/mean/students');
  }

  addStudents(newStudent)
  {
const headers = new Headers();
headers.append('Content-Type','application/json');
return this.http.post('http://localhost:8080/mean/student', newStudent);
  }


 
}
