import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBranchesComponent } from './list-branches.component';
import { BranchAPIService } from './../service/branch-api.service';


describe('ListBranchesComponent', () => {
  let component: ListBranchesComponent;
  let fixture: ComponentFixture<ListBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBranchesComponent, BranchAPIService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
