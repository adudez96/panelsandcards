import { Component, OnInit } from '@angular/core';
import { Panel, DragPanelColorScheme } from './components/panels.model';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="app-root">
    <drag-panel *ngFor="let panel of panelsList" [panel]="panel"></drag-panel>
  </div>
  `
})
export class AppComponent implements OnInit {
  panelsList: Panel[];

  ngOnInit() {
    this.panelsList = [
      new Panel(DragPanelColorScheme.RED, 0, 0, 0, 0),
      new Panel(DragPanelColorScheme.BLUE, 0, 0, 0, 0),
      new Panel(DragPanelColorScheme.WHITE, 0, 0, 0, 0),
    ]
  }
}
