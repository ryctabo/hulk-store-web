import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';

import { KeysPipe } from './keys.pipe';

@NgModule({
  imports: [
    CommonModule,

    /** Material Design Modules */
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  exports: [
    /** Modules */
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,

    /** Pipes */
    KeysPipe
  ],
  declarations: [KeysPipe]
})
export class SharedModule { }
