import { Component, OnInit } from '@angular/core';
import {customer} from '../customer';
import {NgForm} from '@angular/forms';
import {ExtService} from '../ext.service';
import {node} from '../nodeservice';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
customer: customer = new customer() ;
node:node[];
students:node[];
  constructor(private extservice: ExtService) { }

  ngOnInit() {
  }

show(customerForm: NgForm)
{
  const newStudent=
  {
    id:customerForm.value.jid,
    name:customerForm.value.Name,
    favlang:customerForm.value.favlang,
    per:customerForm.value.Percentage,
    state:customerForm.value.State,
    branch:customerForm.value.branch
  }
  this.extservice.addStudents(newStudent).subscribe((response: node[]) => {
    this.students=response;
  });




}
}
