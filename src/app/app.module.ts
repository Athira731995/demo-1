import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SampleComponent,
    CalculatorComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
