export enum DragPanelColorScheme {
  WHITE,
  RED,
  BLUE,
}

export class Panel {
  theme: DragPanelColorScheme;
  sizeX: number;
  sizeY: number;

  constructor(theme: DragPanelColorScheme, sizeX: number, sizeY: number) {
    this.theme = theme;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }
}
