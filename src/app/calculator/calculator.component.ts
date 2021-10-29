import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1:any=""
  value2:any=""
  operator=""
  result:any=""
  eq_operator=false
  constructor() {
console.log("called");

  }
  
  
  getData(e:any){
    if(this.value1==""){
      this.value1= e
    }else{
     // this.value2= ( e.target as HTMLInputElement).value
     this.value2=e
    }  }
  setOperator(opr){
    if(opr!='='){
    this.operator=opr
    if(opr=="clr"){
      this.value1=""
      this.value2=""
      this.result=""
      this.operator=""
      this.eq_operator=false
    }
    }
    else{
      this.eq_operator=true
        switch(this.operator){
          case "+":{
            this.result=parseInt(this.value1)+parseInt(this.value2)
            break
          }
          case "-":{
            this.result=parseInt(this.value1)-parseInt(this.value2)
            break
          }
          
        }
    }

  }
  ngOnInit(): void {
  }

}
