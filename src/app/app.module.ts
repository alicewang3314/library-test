import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MaterialModule } from './material.module';

// Captor components modules
import { CaptorInputModule, CaptorFormModule, CaptorThemeModule, CaptorDateModule, CaptorSelectModule } from 'components';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CaptorInputModule,
    CaptorFormModule,
    MatMomentDateModule,
    CaptorThemeModule,
    CaptorDateModule,
    CaptorSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
