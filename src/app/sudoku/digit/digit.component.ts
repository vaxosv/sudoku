import { Component, Input } from '@angular/core';
import { SudokuModel } from '../models/sudoku.model';
import { SudokuService } from '../services/sudoku.service';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss'],
})
export class DigitComponent {
  @Input() digit: SudokuModel;
  showError: boolean;
  accepted = ['Backspace', 'Delete'];

  constructor(public sudokuService: SudokuService) {}

  validateNumber(event) {
    const PressedKey = event.key;
    this.isTruthy(PressedKey);

    const regex = RegExp(/[0-9\b]+/);

    if (!regex.test(PressedKey) && !this.accepted.includes(PressedKey)) {
      event.preventDefault();
      return;
    }
  }

  private isTruthy(pressedKey: string) {
    this.showError = this.digit.number !== Number(pressedKey);
    if (this.accepted.includes(pressedKey)) {
      this.showError = false;
    }
  }
}
