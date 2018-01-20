import { Component, OnInit } from '@angular/core';
import {ExtService} from '../ext.service';
import {node} from '../nodeservice';
import { FilterPipe } from '../filter.pipe';
import { HighDirective } from '../high.directive';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],

  styles: [`
  p {
    color:purple;
    font-size:40px;
  }
  .kiu
  {
    border-bottom: 6px solid red;
    background-color: lightgrey;
    width:1000px;
  }
  #op
  {
color:Red;
font-size:25px
  }
  table {
    border-collapse: collapse;
   
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
`]  
})
export class ServersComponent implements OnInit {
  students:node[];
  no=50;
  constructor(private extservice:ExtService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.extservice.getStudents().subscribe((response: node[]) => {
      this.students = response;
      
 });
  }
  hey(n)
  {
    return this.no= n;
  }
  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
