import { Component, OnInit } from '@angular/core';
import {ExtService} from '../ext.service';
import {node} from '../nodeservice';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students:node[];

  constructor(private extservice:ExtService ) { }

  ngOnInit() {
    this.extservice.getStudents().subscribe((response: node[]) => {
      this.students = response;
      
 });
  }

}
