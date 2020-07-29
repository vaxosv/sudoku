import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DifficultySelectorComponent } from './sudoku/difficulty-selector/difficulty-selector.component';
import { GridSectionComponent } from './sudoku/grid-section/grid-section.component';
import { GridComponent } from './sudoku/grid/grid.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DigitComponent} from './sudoku/digit/digit.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { AsideComponent } from './sudoku/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    DifficultySelectorComponent,
    GridSectionComponent,
    GridComponent,
    DigitComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [DifficultySelectorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
