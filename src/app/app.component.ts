import { Component } from '@angular/core';
import { faAmbulance,faCoffee,faAddressBook } 
from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  Coffee=faCoffee
  addressbook=faAddressBook
  ambulance=faAmbulance
  customcolor="pink"
  condition=false
  colors=["red","yellow","green"]

  setColor(e:any){
    console.log(e);
    
  this.customcolor=e.target.value
  }
}
