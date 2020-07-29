import { Component, Input } from '@angular/core';
import { SudokuModel } from '../models/sudoku.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() sudoku: Array<Array<SudokuModel>>;
}
