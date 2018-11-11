import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBranchMapComponent } from './view-branch-map.component';

describe('ViewBranchMapComponent', () => {
  let component: ViewBranchMapComponent;
  let fixture: ComponentFixture<ViewBranchMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBranchMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBranchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
