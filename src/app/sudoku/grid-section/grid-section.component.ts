import { Component, Input } from '@angular/core';
import { SudokuModel } from '../models/sudoku.model';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.scss'],
})
export class GridSectionComponent {
  @Input() sudokuSection: Array<SudokuModel>;
}
