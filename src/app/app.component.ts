import { Component, OnInit } from '@angular/core';
import { Panel, DragPanelColorScheme } from './components/panels.model';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="app-root">
    <div class="menu">
      <button mat-fab
        class="create-panel-button"
        (click)="onCreatePanel(DragPanelColorScheme.WHITE)"
      >White</button>
      <button mat-fab
        class="create-panel-button"
        (click)="onCreatePanel(DragPanelColorScheme.RED)"
      >Red</button>
      <button mat-fab
        class="create-panel-button"
        (click)="onCreatePanel(DragPanelColorScheme.BLUE)"
      >Blue</button>
    </div>
    <drag-panel *ngFor="let panel of panelsList" [panel]="panel"></drag-panel>
  </div>
  `
})
export class AppComponent implements OnInit {
  panelsList: Panel[];
  DragPanelColorScheme = DragPanelColorScheme;

  ngOnInit() {
    this.panelsList = []
  }

  onCreatePanel(scheme: DragPanelColorScheme) {
    this.panelsList = [...this.panelsList, new Panel(scheme, 0, 0, 0, 0)];
  }
}
