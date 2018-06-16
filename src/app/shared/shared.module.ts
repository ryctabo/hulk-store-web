import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

import { KeysPipe } from './keys.pipe';

@NgModule({
  imports: [
    CommonModule,

    /** Material Design Modules */
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [
    /** Modules */
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,

    /** Pipes */
    KeysPipe
  ],
  declarations: [KeysPipe]
})
export class SharedModule { }
