import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  saveDetails:any={message:"a",date:"a",time:"a"};
  display(message:any,date:any,time:any){
    this.saveDetails={
      message:message,
      date:date,
      time:time
    }
    return this.saveDetails;
  }
}
