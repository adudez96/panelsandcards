import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ContextMenuModule } from '@ctrl/ngx-rightclick';

import { DragPanelComponent } from './drag-panel.component';
import { ResizableModule } from 'angular-resizable-element';
import { PanelMenuComponent } from './panel-menu.component';

@NgModule({
  declarations: [
    DragPanelComponent,
    PanelMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    ResizableModule,
    MatButtonModule,
    MatIconModule,
    ContextMenuModule,
  ],
  entryComponents: [
    PanelMenuComponent,
  ],
  exports: [
    DragPanelComponent,
    PanelMenuComponent,
  ]
})
export class DragPanelModule {}
