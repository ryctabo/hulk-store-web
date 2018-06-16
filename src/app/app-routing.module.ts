import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './layout/not-found/not-found.component';
import { MainComponentComponent } from './layout/main-component/main-component.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductEditorComponent } from './product/product-editor/product-editor.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponentComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'categories', component: CategoryListComponent },
      {
        path: 'products',
        children: [
          { path: '', component: ProductListComponent },
          { path: 'new', component: ProductEditorComponent },
        ]
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
