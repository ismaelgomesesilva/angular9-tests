import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hellow-word';
  name= "";

  displayHeader=false;

  color = "red";

  colors = ["red", "green", "blue", "purple", "yellow"];

  /* Conversation Father and son*/
  public nameToChild = "Ismael";
  public message = "";
  /* Finish */

  /* Pipe */
  namePipe = 'Codevolution'
  messagePipe = 'Welcome to codevolution'
  person={
    "firstname" : "Ismael",
    "lastname" : "Silva"
  }
  datePipe = new Date()

  /* Finish */

  /* Service */
  


  /* Finish */

  onClick($values){
    console.log($values);
  }
}
