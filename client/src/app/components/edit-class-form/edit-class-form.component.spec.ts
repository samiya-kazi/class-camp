import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassFormComponent } from './edit-class-form.component';

describe('EditClassFormComponent', () => {
  let component: EditClassFormComponent;
  let fixture: ComponentFixture<EditClassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClassFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
