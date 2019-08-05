import { uuidv4 } from '../utils/uuid';

export enum DragPanelColorScheme {
  WHITE,
  RED,
  BLUE,
}

export class Panel {
  id: string;
  label: string;
  theme: DragPanelColorScheme;
  sizeX: number;
  sizeY: number;
  positionX: number;
  positionY: number;

  constructor(
    label: string,
    theme: DragPanelColorScheme,
    positionX: number,
    positionY: number,
    sizeX: number,
    sizeY: number,
  ) {
    this.id = uuidv4();
    this.label = label;
    this.theme = theme;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.positionX = positionX;
    this.positionY = positionY;
  }
}
