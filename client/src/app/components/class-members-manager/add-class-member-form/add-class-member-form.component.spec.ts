import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassMemberFormComponent } from './add-class-member-form.component';

describe('AddClassMemberFormComponent', () => {
  let component: AddClassMemberFormComponent;
  let fixture: ComponentFixture<AddClassMemberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassMemberFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
