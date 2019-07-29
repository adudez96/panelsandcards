import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DragPanelComponent } from './components/drag-panel/drag-panel.component';
import { ResizableModule } from 'angular-resizable-element';
import { MyjsonService } from './services/myjson.service';
import { Datastore } from './services/datastore.service';

@NgModule({
  declarations: [
    AppComponent,
    DragPanelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ResizableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    MyjsonService,
    Datastore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
