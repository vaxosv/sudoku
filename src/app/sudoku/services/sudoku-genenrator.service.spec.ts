import { TestBed } from '@angular/core/testing';

import { SudokuGeneratorService } from './sudoku-genenrator.service';

describe('SudokuGenenratorService', () => {
  let service: SudokuGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudokuGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getSudoku function and return sudoku  with 9 sections', () => {
    const result = service.getSudoku(0);
    const length = result.length;

    expect(length).toBeGreaterThan(0);
  });

  it('should be 9 uniq numbers', () => {
    const result = service.getSudoku(0);
    const section = result[0];

    const allNumbers = section.map((item) => item.number);

    const lengthOfUniqueNumbers = new Set(allNumbers).size;

    expect(lengthOfUniqueNumbers).toBeGreaterThanOrEqual(9);
  });
});
