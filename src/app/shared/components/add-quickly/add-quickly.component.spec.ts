import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuicklyComponent } from './add-quickly.component';

describe('AddQuicklyComponent', () => {
  let component: AddQuicklyComponent;
  let fixture: ComponentFixture<AddQuicklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuicklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuicklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
