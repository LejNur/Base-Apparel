import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'front-end-mentor';

 

    onSubmit(form: NgForm) {
      console.log(form.value) 
    }


  
}
