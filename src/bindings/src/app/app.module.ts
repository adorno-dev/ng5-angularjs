import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { ClassesComponent } from './classes/classes.component';
import { StylesComponent } from './styles/styles.component';
import { EventsComponent } from './events/events.component';
import { TemplatesComponent } from './templates/templates.component';
import { TwoWayComponent } from './two-way/two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    ClassesComponent,
    StylesComponent,
    EventsComponent,
    TemplatesComponent,
    TwoWayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
