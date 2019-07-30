import { Component } from '@angular/core';

import { MenuComponent, ContextMenuService, MenuPackage } from '@ctrl/ngx-rightclick';

@Component({
  selector: 'panel-menu',
  // add your menu html
  template: `<a (click)="handleClick()">Download</a>`,
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
    console.log(menuPackage.context)
  }

  handleClick() {
    // IMPORTANT! tell the menu to close, anything passed in here is given to (menuAction)
    this.contextMenuService.closeAll();
  }
}
