import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighFundsListComponent } from './high-funds-list.component';

describe('HighFundsListComponent', () => {
  let component: HighFundsListComponent;
  let fixture: ComponentFixture<HighFundsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighFundsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighFundsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
