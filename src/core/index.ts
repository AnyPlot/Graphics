/**
 * core 中主要职责：
 * 1. shape: 内置的所有原子 UI 组件，后续用于构建 GUI 的基础元素
 * 2. group: 容器，可以放置多个组件
 * 3. graph: 最终透漏的画布
 * 4. 构建画布的 virtual DOM，本质是一个 group + shape 构建的树形结构
 */

export { Graph } from './graph';
export { Group } from './group';
export { Shape } from './shape';
