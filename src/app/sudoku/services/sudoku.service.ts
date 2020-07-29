import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  showValue(show: boolean, num: number) {
    return show ? num : '';
  }
}
