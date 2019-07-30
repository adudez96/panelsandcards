import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { Panel, DragPanelColorScheme } from '../../models/panels.model';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { PanelMenuComponent } from './panel-menu.component';

@Component({
  selector: 'app-drag-panel',
  styleUrls: [ './drag-panel.component.scss' ],
  template: `
  <div #thePanel [ngClass]="['drag-panel', mapColorScheme(panel.theme)]"
    cdkDrag
    mwlResizable
    [ngStyle]="style"
    [enableGhostResize]="true"
    [ghostElementPositioning]="'absol0ute'"
    (cdkDragEnded)="onDragEnd($event)"
    [validateResize]="validate"
    (resizeEnd)="onResizeEnd($event)"
  >
    <div class="drag-panel-header">
      <div class="panel-drag-handle"
        cdkDragHandle
        [contextMenuTrigger]="menu"
      >
        <div class="panel-title">
          Drag me!
        </div>
      </div>
      <div class="panel-delete-button"
        (click)="handleDeletePanel()"
      >
        <mat-icon>cancel</mat-icon>
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
export class DragPanelComponent implements OnInit {
  @Input() panel: Panel;

  @Output() onDeletePanel = new EventEmitter<void>();
  @Output() onMovePanel = new EventEmitter<void>();
  @Output() onResizePanel = new EventEmitter<void>();

  @ViewChild('thePanel', {static: false}) thePanel: ElementRef;

  public style: any = {};

  menu = PanelMenuComponent;

  ngOnInit() {
    this.style = {
      position: 'absolute',
      left: `${this.panel.positionX}px`,
      top: `${this.panel.positionY}px`,
      width: `${this.panel.sizeX}px`,
      height: `${this.panel.sizeY}px`,
    };
  }

  handleDeletePanel() {
    this.onDeletePanel.emit();
  }

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 50;
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
      position: 'absolute',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    this.panel.sizeX = event.rectangle.width;
    this.panel.sizeY = event.rectangle.height;
    this.onResizePanel.emit();
  }

  mapColorScheme(scheme: DragPanelColorScheme): string {
    if (scheme === DragPanelColorScheme.WHITE) {
      return 'drag-panel-white';
    }

    if (scheme === DragPanelColorScheme.RED) {
      return 'drag-panel-red';
    }

    if (scheme === DragPanelColorScheme.BLUE) {
      return 'drag-panel-blue';
    }

    return 'drag-panel-white';
  }

  onDragEnd(event: CdkDragEnd) {
    const values = this.thePanel.nativeElement.getBoundingClientRect();

    this.panel.positionX = values.x;
    this.panel.positionY = values.y;
    console.log(this.panel);
    this.onMovePanel.emit();
  }
}
