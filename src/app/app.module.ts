import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DragPanelComponent } from './components/drag-panel.component';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
  declarations: [
    AppComponent,
    DragPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ResizableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
