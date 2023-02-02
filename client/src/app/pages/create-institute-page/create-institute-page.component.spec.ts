import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstitutePageComponent } from './create-institute-page.component';

describe('CreateInstitutePageComponent', () => {
  let component: CreateInstitutePageComponent;
  let fixture: ComponentFixture<CreateInstitutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInstitutePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInstitutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
