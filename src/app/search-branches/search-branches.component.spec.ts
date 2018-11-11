import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBranchesComponent } from './search-branches.component';

describe('SearchBranchesComponent', () => {
  let component: SearchBranchesComponent;
  let fixture: ComponentFixture<SearchBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
