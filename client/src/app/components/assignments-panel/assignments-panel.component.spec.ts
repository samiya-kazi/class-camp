import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsPanelComponent } from './assignments-panel.component';

describe('AssignmentsPanelComponent', () => {
  let component: AssignmentsPanelComponent;
  let fixture: ComponentFixture<AssignmentsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
