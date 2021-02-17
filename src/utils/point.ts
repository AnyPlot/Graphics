
export type PointObject = {
  x: number;
  y: number;
};

export class Point {
  
  public x: number;

  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public clone() {
    return new Point(this.x, this.y);
  }

  public distance(point: Point): number {
    return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2)
  }

  public isEqual(point: Point): boolean {
    return this.x === point.x && this.y === point.y;
  }

  public plain(): PointObject {
    return { x: this.x, y: this.y };
  }
}