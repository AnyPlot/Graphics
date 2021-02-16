import * as _ from 'lodash';
import { uuid } from '../utils/uuid';

/**
 * 提供类似 HTML Element 的 API 方法
 */

 export interface IElement {

  /**
   * id
   */
  readonly id: string;

  /**
   * 类型 tag
   */
  readonly tag: string;

  /**
   * class name
   */
  readonly className?: string;

  /**
   * 属性配置
   */
  readonly attributes: Record<string, any>;

  /**
   * 子元素
   */
  readonly children: IElement[];

  /**
   * 获取属性
   * @param key 
   */
  readonly getAttribute: (key: string) => any;

  /**
   * 设置属性
   * @param key 
   * @param value 
   */
  readonly setAttribute: (key: string, value: any) => void;

  /**
   * 删除属性
   * @param key 
   */
  readonly removeAttribute: (key: string) => void;

  /**
   * 通过 id 查找
   */
  readonly getElementById: (id: string) => IElement;

  /**
   * 通过 class name 查找数组
   */
  readonly getEelementsByClassName: (className: string) => IElement[];

  /**
   * 通过 tag 查找
   */
  readonly getEelementsByTag: (tag: string) => IElement[];

  /**
   * 添加子元素
   */
  readonly add: (element: IElement) => void;
  
  /**
   * 删除子元素
   */
  readonly remove: (element: IElement) => void;
 }
