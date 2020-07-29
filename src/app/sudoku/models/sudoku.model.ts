export interface SudokuModel {
  number: number;
  show: boolean;
  valid: boolean;
}

export type sudokuDataBase = Array<Array<SudokuModel>>;
