import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Selector, SelectorModel } from '../models/selector.model';

@Component({
  selector: 'app-difficulty-selector',
  templateUrl: './difficulty-selector.component.html',
  styleUrls: ['./difficulty-selector.component.scss'],
})
export class DifficultySelectorComponent {
  difficulties: Selector[] = [
    {
      value: SelectorModel.Ease,
      text: 'Easy, 3-5 prefilled numbers',
    },
    {
      value: SelectorModel.Medium,
      text: 'Medium, 2-4 prefilled numbers',
    },
    {
      value: SelectorModel.Hard,
      text: 'Hard — 1-3 prefilled numbers',
    },
  ];
  selectedDifficulty = SelectorModel.Medium;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
