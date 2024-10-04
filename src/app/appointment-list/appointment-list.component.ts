import { Component, Inject } from '@angular/core';
import { app } from '../../../server';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle: string = "";

  newAppointmentDate: Date = new Date();

  appointment :Appointment [] =[];

  ngOnInit(){
     
    let items = localStorage.getItem("appointments"); //need to add validation when we are retiveing from local storage.

    if(items){
 //as we can not parese null . we need add validation
    this.appointment = JSON.parse(items);
    }


  }
   
  

  //  appointment :Appointment = {
  //    id: 1,
  //    title: 'Take Dog for Walk',
  //    date: new Date('2024-08-31')
  //  }

  //intializng empty array

 


 
  idx:number = 0;
  addAppointment(){
    
    
  if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
  
    let newappointment :Appointment = {
      id:this.idx+1 , //for uniquess in milliseconds
      title:this.newAppointmentTitle,
      date: this.newAppointmentDate

    }
    this.appointment.push(newappointment);//appends new element
    localStorage.setItem("appointments",JSON.stringify(this.appointment));
  

    this.newAppointmentDate = new Date();
    this.newAppointmentTitle="";


   

    

  }

  }

  deleteappointment(id:number){
   console.log("Deleting appointment")

 this.appointment = this.appointment.filter(app => app.id !=id);

 localStorage.setItem("appointments", JSON.stringify(this.appointment));

      
  }




}


