import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="app-root">
    <drag-panel></drag-panel>
  </div>
  `
})
export class AppComponent {
  title = 'organise-panels';
}
