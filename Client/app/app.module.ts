import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app/app.component';
import { CustomerfileComponent } from './components/customerfile/customerfile.components';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, CustomerfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

