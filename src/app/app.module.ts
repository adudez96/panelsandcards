import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ContextMenuModule } from '@ctrl/ngx-rightclick';

import { ResizableModule } from 'angular-resizable-element';
import { MyjsonService } from './services/myjson.service';
import { Datastore } from './services/datastore.service';
import { DragPanelModule } from './components/drag-panel/drag-panel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ResizableModule,
    MatButtonModule,
    MatIconModule,
    ContextMenuModule,
    DragPanelModule,
  ],
  providers: [
    MyjsonService,
    Datastore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
