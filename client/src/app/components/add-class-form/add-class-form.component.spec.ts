import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassFormComponent } from './add-class-form.component';

describe('AddClassFormComponent', () => {
  let component: AddClassFormComponent;
  let fixture: ComponentFixture<AddClassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
