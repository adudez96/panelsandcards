import { Component, Input } from "@angular/core";
import { ResizeEvent } from 'angular-resizable-element';

export enum DragPanelColorScheme {
  WHITE,
  RED,
  BLUE,
}

@Component({
  selector: 'drag-panel',
  styleUrls: [ './drag-panel.component.scss' ],
  template: `
  <div [ngClass]="['drag-panel', mapColorScheme(colorScheme)]"
    cdkDrag
    mwlResizable
    [enableGhostResize]="true"
    [ghostElementPositioning]="'absol0ute'"
    [ngStyle]="style"
    [validateResize]="validate"
    (resizeEnd)="onResizeEnd($event)"
  >
    <div class="drag-panel-header">
      <div class="panel-drag-handle"
        cdkDragHandle
      >
        <div class="panel-title">
          Drag me!
        </div>
      </div>
    </div>

    <div class="drag-panel-body"></div>

    <div class="panel-resize-handle"
      mwlResizeHandle
      [resizeEdges]="{bottom: true, right: true}"
    ></div>
  </div>
  `
})
export class DragPanelComponent {
  @Input()
  colorScheme: DragPanelColorScheme = DragPanelColorScheme.RED;

  public style: object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  mapColorScheme(scheme: DragPanelColorScheme): string {
    if (scheme === DragPanelColorScheme.WHITE) {
      return "drag-panel-white";
    }

    if (scheme === DragPanelColorScheme.RED) {
      return "drag-panel-red";
    }

    if (scheme === DragPanelColorScheme.BLUE) {
      return "drag-panel-blue";
    }

    return "drag-panel-white";
  }
};
