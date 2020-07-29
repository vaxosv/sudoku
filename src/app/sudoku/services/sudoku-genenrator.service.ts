import { Injectable } from '@angular/core';
import { AdvancedArray } from '../models/helpers.model';
import { sudokuDataBase } from '../models/sudoku.model';

@Injectable({
  providedIn: 'root',
})
export class SudokuGeneratorService {
  grid = [];
  constructor() {}

  static generateFirstNine() {
    const nums = [];
    while (true) {
      const randomNum = Math.floor(Math.random() * 9) + 1;
      if (nums.length < 9 && !nums.includes(randomNum)) {
        nums.push(randomNum);
      } else if (nums.length === 9) {
        break;
      }
    }
    return nums;
  }

  getSudoku(difficulty): sudokuDataBase {
    this.generate();
    return this.createSudoku(this.grid, difficulty);
  }

  generate() {
    this.grid.push(SudokuGeneratorService.generateFirstNine());
    for (let i = 0; i < 8; i++) {
      if (i === 2 || i === 5) {
        this.grid.push(this.shift(this.grid[i], 1));
      } else {
        this.grid.push(this.shift(this.grid[i], 3));
      }
    }

    this.grid = this.shuffleRows(this.grid);
    this.grid = this.shuffleColumn(this.grid);
  }

  shift(arr, by) {
    const numsToShift = arr.filter((num, i) => i < by);
    const numsLeft = arr.filter((num, i) => i >= by);
    return [...numsLeft, ...numsToShift];
  }

  shuffleRows(grid) {
    // @ts-ignore
    let newGrid: AdvancedArray<Array<any>> = [];
    grid.forEach((row, i) => {
      if (i % 3 === 0) {
        newGrid.push([row]);
      } else {
        newGrid[Math.trunc(i / 3)].push(row);
      }
    });
    newGrid = newGrid.sort(() => Math.random() - 0.5);
    return newGrid.flat();
  }

  shuffleColumn(arr) {
    let cols = this.rowsToCols(arr);
    cols = cols.sort(() => Math.random() - 0.5);
    return this.colsToRow(cols);
  }

  rowsToCols(arr) {
    const newArr = [[], [], []];
    arr.forEach((row) => {
      row.forEach((cell, j) => {
        newArr[Math.trunc(j / 3)].push(cell);
      });
    });
    return newArr;
  }

  colsToRow(arr) {
    const newArr = [];
    arr.forEach((cols, i) => {
      cols.forEach((row, j) => {
        if (i === 0 && j % 3 === 0) {
          newArr.push([row]);
        } else {
          newArr[Math.trunc(j / 3)].push(row);
        }
      });
    });
    return newArr;
  }

  // this func is not necessary
  rowsToSections(grid) {
    const newArr = [];
    grid.forEach((row, i) => {
      if (i % 3 === 0) {
        newArr.push([]);
        newArr.push([]);
        newArr.push([]);
      }
      row.forEach((cell, j) => {
        newArr[Math.trunc(j / 3) + Math.trunc(i / 3) * 3].push(cell);
      });
    });

    return newArr;
  }

  numbersToShowByDifficulty(grid, level) {
    const newArr = [];
    const difficultyLevels = [
      [3, 5],
      [2, 4],
      [1, 3],
    ];

    grid.forEach((section) => {
      const qty = this.getRandomFromRange(difficultyLevels[level]);
      newArr.push(this.hideNumbers(section, qty));
    });
    return newArr;
  }

  createSudoku(grid, diffLevel) {
    const numsToShow = this.numbersToShowByDifficulty(grid, diffLevel);
    return grid.map((row, i) =>
      row.map((cell, j) => {
        if (numsToShow[i].includes(j)) {
          return { number: cell, show: true, valid: true };
        } else {
          return { number: cell, show: false, valid: true };
        }
      })
    );
  }

  getRandomFromRange(range) {
    const [min, max] = range;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  hideNumbers(section, qty) {
    const temp = [];
    let random = this.getRandomFromRange([0, 8]);
    while (temp.length < qty) {
      if (!temp.includes(random)) {
        temp.push(random);
      }
      random = this.getRandomFromRange([0, 8]);
    }
    return temp;
  }
}
