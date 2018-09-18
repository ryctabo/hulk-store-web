import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEditorComponent } from './stock-editor.component';

describe('StockEditorComponent', () => {
  let component: StockEditorComponent;
  let fixture: ComponentFixture<StockEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
