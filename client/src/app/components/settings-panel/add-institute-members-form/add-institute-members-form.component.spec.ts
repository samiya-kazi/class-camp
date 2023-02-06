import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstituteMembersFormComponent } from './add-institute-members-form.component';

describe('AddInstituteMembersFormComponent', () => {
  let component: AddInstituteMembersFormComponent;
  let fixture: ComponentFixture<AddInstituteMembersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstituteMembersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInstituteMembersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
