import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstituteFormComponent } from './edit-institute-form.component';

describe('EditInstituteFormComponent', () => {
  let component: EditInstituteFormComponent;
  let fixture: ComponentFixture<EditInstituteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstituteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInstituteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
