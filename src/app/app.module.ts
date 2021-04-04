import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { ReversePipe } from './reverse.pipe';
import { HighlightDirective } from './highlight.directive';
import { NameComponent } from './name/name.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    ReversePipe,
    HighlightDirective,
    NameComponent,
    FormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
