import { Component } from "@angular/core";

@Component({
  selector: 'drag-panel',
  styleUrls: [ './drag-panel.component.scss' ],
  template: `
  <div class="drag-panel" cdkDrag>
    Drag me!
  </div>
  `
})
export class DragPanelComponent {};
