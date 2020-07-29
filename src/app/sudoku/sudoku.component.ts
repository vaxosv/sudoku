import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DifficultySelectorComponent } from './difficulty-selector/difficulty-selector.component';
import { filter } from 'rxjs/operators';
import { SudokuGeneratorService } from './services/sudoku-genenrator.service';
import { sudokuDataBase } from './models/sudoku.model';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss'],
})
export class SudokuComponent {
  sudoku: sudokuDataBase;
  constructor(
    private sudokuGeneratorService: SudokuGeneratorService,
    private dialog: MatDialog
  ) {}

  newSudoku() {
    this.dialog
      .open(DifficultySelectorComponent, {
        width: '1029px',
        height: '761px',
      })
      .afterClosed()
      .pipe(filter((data) => data || data === 0))
      .subscribe((difficulty) => {
        console.log(difficulty);
        this.sudoku = this.sudokuGeneratorService.getSudoku(difficulty);
        console.log(this.sudoku);
      });
  }
}
