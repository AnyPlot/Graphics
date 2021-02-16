import * as _ from 'lodash';
import EventEmitter from '@antv/event-emitter';
import { uuid } from '../utils/uuid';
import { MATRIX } from '../utils/const';
import { IElement, IEventEmitter, IMatrixValue, IMaxtrix } from '../types';

/**
 * 图形画布中的容器元素，可以包含有子元素
 */
export class Group extends EventEmitter implements IEventEmitter, IElement, IMaxtrix {
  
  /**
   * 元素的 id，自动生成
   */
  public id: string = uuid();

  /**
   * 元素的 tag，自动根据元素类型设置
   */
  public tag: string = 'group';
  
  /**
   * 类型，用于查找元素
   */
  public className: string = '';
  
  /**
   * 元素的 attributes 配置
   */
  public attributes: Record<string, any> = {};

  /**
   * 当前的 matrix 数据，默认设置为初始的矩阵
   */
  public matrix: IMatrixValue = MATRIX;
  
  /**
   * 子元素
   */
  public children: IElement[];

  /**
   * 获取属性
   * @param key 
   */
  public getAttribute(key: string) {
    return _.get(this.attributes, key);
  }

  /**
   * 设置属性
   * @param key 
   * @param value 
   */
  public setAttribute(key: string, value: any) {
    return _.set(this.attributes, key, value);
  }

  /**
   * 删除属性
   * @param key 
   */
  public removeAttribute(key: string) {
    return _.unset(this.attributes, key);
  }

  /**
   * 通过 id 查找
   */
  public getElementById(id: string) {
    return this as any as IElement;
  }

  /**
   * 通过 class name 查找数组
   */
  public getEelementsByClassName(className: string) {
    return []
  }

  /**
   * 通过 tag 查找
   */
  public getEelementsByTag(tag: string) {
    return [];
  }

  /**
   * 添加子元素
   */
  public add() {}
  
  /**
   * 删除子元素
   */
  public remove() {}

  /**
   * 移动到 x y 位置
   * @param x 
   * @param y 
   */
  public moveTo(x: number, y: number) {
    return this.matrix;
  }
  
  /**
   * 移动 x y 位移
   * @param x 
   * @param y 
   */
  public moveBy(x: number, y: number) {
    return this.matrix;
  }
  
  /**
   * 放大缩小到 x y
   * @param x 
   * @param y 
   */
  public scaleTo(x: number, y: number) {
    return this.matrix;
  }
  
  /**
   * 放大缩小 x y 比例
   * @param x 
   * @param y 
   */
  public scaleBy(x: number, y: number) {
    return this.matrix;
  }
  
  /**
   * 旋转到 angle 角度
   * @param angle 
   */
  public rotateTo(angle: number) {
    return this.matrix;
  }
  
  /**
   * 旋转 angle 角度
   * @param angle 
   */
  public rotateBy(angle: number) {
    return this.matrix;
  }
}