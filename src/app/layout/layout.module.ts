import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { RootComponent } from './root/root.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,

    SharedModule
  ],
  declarations: [
    RootComponent,
    NotFoundComponent,
    MainComponentComponent
  ]
})
export class LayoutModule { }
