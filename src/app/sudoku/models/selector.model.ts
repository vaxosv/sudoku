export enum SelectorModel {
  Ease,
  Medium,
  Hard,
}

export interface Selector {
  value: SelectorModel;
  text: string;
}
