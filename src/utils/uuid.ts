/**
 * v4 版本的uuid生成算法，from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * 有极小概率会生成重复的值，参见 https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29
 * @returns {string}
 */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string): string => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
