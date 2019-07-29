import { uuidv4 } from '../utils/uuid';

export enum DragPanelColorScheme {
  WHITE,
  RED,
  BLUE,
}

export class Panel {
  id: string;
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
    this.id = uuidv4();
    this.theme = theme;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.positionX = positionX;
    this.positionY = positionY;
  }
}
