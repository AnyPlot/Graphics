/**
 * 为元素提供可渲染的能力
 */
export interface IRenderable {

  /**
   * 渲染
   */
  readonly render: () => Promise<void>;
}
