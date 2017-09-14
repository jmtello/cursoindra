import { CommonsModule } from './commons/commons.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IdeasComponent } from './ideas/ideas.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ValidFormComponent } from './valid-form/valid-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    MostrarComponent,
    FormulariosComponent,
    ValidFormComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
