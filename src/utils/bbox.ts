
/**
 * 描述元素大小宽高的数据结构 
 */

import { Point } from './point';

export type BBoxObject = {
  x: number;
  y: number;
  width: number;
  height: number;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
};

export class BBox {
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public static fromRange(minX: number, minY: number, maxX: number, maxY: number) {
    return new BBox(minX, minY, maxX - minX, maxY - minY);
  }

  public static fromObject(bbox: BBoxObject) {
    return new BBox(bbox.minX, bbox.minY, bbox.width, bbox.height);
  }

  public get minX(): number {
    return this.x;
  }

  public get maxX(): number {
    return this.x + this.width;
  }

  public get minY(): number {
    return this.y;
  }

  public get maxY(): number {
    return this.y + this.height;
  }

  public get tl(): Point {
    return new Point(this.x, this.y);
  }

  public get tr(): Point {
    return new Point(this.maxX, this.y);
  }

  public get bl(): Point {
    return new Point(this.x, this.maxY);
  }

  public get br(): Point {
    return new Point(this.maxX, this.maxY);
  }

  public get top(): Point {
    return new Point(this.x + this.width / 2, this.minY);
  }

  public get right(): Point {
    return new Point(this.maxX, this.y + this.height / 2);
  }

  public get bottom(): Point {
    return new Point(this.x + this.width / 2, this.maxY);
  }

  public get left(): Point {
    return new Point(this.minX, this.y + this.height / 2);
  }

  /**
   * clone 一个新的实例
   */
  public clone() {
    return new BBox(this.x, this.y, this.width, this.height);
  }

  /**
   * bbox 是否相等
   * @param {BBox} bbox
   * @returns
   */
  public isEqual(bbox: BBox): boolean {
    return this.x === bbox.x && this.y === bbox.y && this.width === bbox.width && this.height === bbox.height;
  }

  /**
   * 是否碰撞
   * @param bbox
   */
  public collide(bbox: BBox): boolean {
    return this.minX < bbox.maxX && this.maxX > bbox.minX &&
      this.minY < bbox.maxY && this.maxY > bbox.minY;
  }

  /**
   * 获取包围盒大小
   * @returns 包围盒大小
   */
  public size(): number {
    return this.width * this.height;
  }

  /**
   * 点是否在 bbox 中
   * @param p
   */
  public contains(p: Point) {
    return p.x >= this.minX && p.x <= this.maxX && p.y >= this.minY && p.y <= this.maxY;
  }

  /**
   * 交集
   * @param bboxes 
   */
  public union(...bboxes: BBox[]) {
    const bbox = this.clone();
    bboxes.forEach((b: BBox) => {
      bbox.x = Math.max(b.x, bbox.x);
      bbox.y = Math.max(b.y, bbox.y);
      bbox.width = Math.min(b.maxX, bbox.maxX) - bbox.x;
      bbox.height = Math.min(b.maxY, bbox.maxY) - bbox.y;
    });

    return bbox;
  }

  /**
   * 并集
   * @param bboxes 
   */
  public intersect(...bboxes: BBox[]) {
    const bbox = this.clone();
    bboxes.forEach((b: BBox) => {
      bbox.x = Math.min(b.x, bbox.x);
      bbox.y = Math.min(b.y, bbox.y);
      bbox.width = Math.max(b.maxX, bbox.maxX) - bbox.x;
      bbox.height = Math.max(b.maxY, bbox.maxY) - bbox.y;
    });

    return bbox;
  }

  /**
   * 纯 obejct
   */
  public plain(): BBoxObject {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      minX: this.minX,
      minY: this.minY,
      maxX: this.maxX,
      maxY: this.maxY,
    };
  }
}
