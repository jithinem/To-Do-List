import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  constructor(private router:Router, private ds:DataService){}
  ngOnInit(): void{

  }
  message:any;
  date:any;
  time:any;
  times:any;

  submit(){
    // alert('submit')
    var message=this.message;
    var date=this.date;
    var time=this.time;
    this.times=this.ds.display(message,date,time);
  }
}
