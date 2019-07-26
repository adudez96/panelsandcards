import { Component, OnInit } from '@angular/core';
import { Panel, DragPanelColorScheme } from './components/panels.model';
import { Datastore } from './services/datastore.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="app-root">
    <div class="menu">
      <button mat-fab
        class="create-panel-button create-panel-button-white"
        (click)="onCreatePanel(DragPanelColorScheme.WHITE)"
      >White</button>
      <button mat-fab
        class="create-panel-button create-panel-button-red"
        (click)="onCreatePanel(DragPanelColorScheme.RED)"
      >Red</button>
      <button mat-fab
        class="create-panel-button create-panel-button-blue"
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

  constructor (private datastore: Datastore) {}

  ngOnInit() {
    this.datastore.getPanels().subscribe((panels: Panel[]) => {
      this.panelsList = panels;
    });
  }

  onCreatePanel(scheme: DragPanelColorScheme) {
    this.panelsList = [...this.panelsList, new Panel(scheme, 0, 0, 0, 0)];
    this.datastore.putPanels(this.panelsList).subscribe();
  }
}
