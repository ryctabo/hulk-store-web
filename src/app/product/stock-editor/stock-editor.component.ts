import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

import { StockService } from '../shared/stock.service';

@Component({
  selector: 'hulk-stock-editor',
  templateUrl: './stock-editor.component.html',
  styleUrls: ['./stock-editor.component.scss']
})
export class StockEditorComponent implements OnInit {

  stockForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<StockEditorComponent>,
    private _service: StockService,
    private _builder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.stockForm = this._builder.group({
      type: ['INPUT', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      message: ['', Validators.required]
    });
  }

  onSave() {
    console.log('Saving stock!...');
  }

}
