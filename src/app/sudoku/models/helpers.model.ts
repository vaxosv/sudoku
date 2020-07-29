export interface AdvancedArray<T> extends Array<any> {
  flat(): Array<T>;
  flatMap(func: (x: T) => T): Array<T>;
}
