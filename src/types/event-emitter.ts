/**
 * 提供事件 event emitter 能力接口
 */
export interface IEventEmitter {
  /**
   * 监听事件
   * @param eventName 
   * @param cb 
   * @param once 
   */
  on(eventName: string, cb: Function, once?: boolean): void;

  /**
   * 监听一次事件
   * @param eventName 
   * @param cb 
   */
  once(eventName: string, cb: Function): void;

  /**
   * 取消监听事件
   * @param eventName 
   * @param cb 
   */
  off(eventName?: string, cb?: Function): void;

  /**
   * 触发事件
   */
  emit: (eventName: string, ...params: any[]) => void;
}
