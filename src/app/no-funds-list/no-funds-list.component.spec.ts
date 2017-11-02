import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFundsListComponent } from './no-funds-list.component';

describe('NoFundsListComponent', () => {
  let component: NoFundsListComponent;
  let fixture: ComponentFixture<NoFundsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFundsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFundsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
