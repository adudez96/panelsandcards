import { Component } from '@angular/core';

import { MenuComponent, ContextMenuService, MenuPackage } from '@ctrl/ngx-rightclick';

@Component({
  selector: 'app-panel-menu',
  styleUrls: [ './panel-menu.component.scss' ],
  // add your menu html
  template: `
    <div class="panel-menu">
      <div class="panel-menu-item panel-delete-menu-item"
        (click)="handleClick()"
      ><mat-icon>delete</mat-icon></div>
    </div>
  `,
})
export class PanelMenuComponent extends MenuComponent {
  // this module does not have animations, set lazy false
  lazy = false;

  constructor(
    public menuPackage: MenuPackage,
    public contextMenuService: ContextMenuService,
  ) {
    super(menuPackage, contextMenuService);
    // grab any required menu context passed via menuContext input
    console.log(menuPackage.context);
  }

  handleClick() {
    // IMPORTANT! tell the menu to close, anything passed in here is given to (menuAction)
    this.contextMenuService.closeAll('delete');
  }
}
