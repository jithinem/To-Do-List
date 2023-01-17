import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  constructor(private router:Router, private ds:DataService){
    this.sDate=Date();
  }
  ngOnInit(): void{

  }
  message:any;
  times:any;
  sDate:any;
  t:any;
  del:any;

  submit(){
    // alert('submit')
    var message=this.message;
    this.times=this.ds.display(message);
  }
  delete(del:any){
    this.times.splice(del,1)
  }
}
