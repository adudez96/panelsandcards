export enum DragPanelColorScheme {
  WHITE,
  RED,
  BLUE,
}

export class Panel {
  theme: DragPanelColorScheme;
  sizeX: number;
  sizeY: number;
  positionX: number;
  positionY: number;

  constructor(
    theme: DragPanelColorScheme,
    sizeX: number,
    sizeY: number,
    positionX: number,
    positionY: number,
  ) {
    this.theme = theme;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.positionX = positionX;
    this.positionY = positionY;
  }
}
