/**
 * matrix 的类型定义
 */
export type IMatrixValue = number[];

/**
 * 为元素提供 matrix 的能力
 */
export interface IMaxtrix {

  /**
   * 当前的 matrix 数据，默认设置为初始的矩阵
   */
  readonly matrix: IMatrixValue;

  /**
   * 移动到 x y 位置
   * @param x 
   * @param y 
   */
  readonly moveTo: (x: number, y: number) => IMatrixValue;
  
  /**
   * 移动 x y 位移
   * @param x 
   * @param y 
   */
  readonly moveBy: (x: number, y: number) => IMatrixValue;
  
  /**
   * 放大缩小到 x y
   * @param x 
   * @param y 
   */
  readonly scaleTo: (x: number, y: number) => IMatrixValue;
  
  /**
   * 放大缩小 x y 比例
   * @param x 
   * @param y 
   */
  readonly scaleBy: (x: number, y: number) => IMatrixValue;
  
  /**
   * 旋转到 angle 角度
   * @param angle 
   */
  readonly rotateTo: (angle: number) => IMatrixValue;
  
  /**
   * 旋转 angle 角度
   * @param angle 
   */
  readonly rotateBy: (angle: number) => IMatrixValue;
}
