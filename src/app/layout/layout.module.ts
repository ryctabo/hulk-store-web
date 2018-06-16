import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    CommonModule,

    SharedModule
  ],
  declarations: [RootComponent]
})
export class LayoutModule { }
