import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'hulk-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSource: Category[];

  categoryForm: FormGroup;

  constructor(private _service: CategoryService,
    private _snackbar: MatSnackBar,
    private _builder: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this._builder.group({
      name: ['', Validators.required]
    });
    this.asyncDataSource();
  }

  private asyncDataSource() {
    this._service.get().subscribe(
      (categories: Category[]) => {
        this.dataSource = categories;
      },
      error => {
        console.error(error);
      }
    );
  }

  delete(id: number) {
    this._service.delete(id).subscribe(
      data => {
        this.asyncDataSource();
        this._snackbar.open(`The category with name ${data.name} has been deleted!`);
      },
      error => {
        console.error(error);
      }
    );
  }

  save() {
    const category = this.categoryForm.value;
    this._service.save({ name: category.name }).subscribe(
      data => {
        this.asyncDataSource();
        this._snackbar.open(`The category with name ${data.name} has been created!`);
        this.categoryForm.reset({});
      },
      error => {
        console.error(error);
      }
    );
  }

}
