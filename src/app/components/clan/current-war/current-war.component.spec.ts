import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWarComponent } from './current-war.component';

describe('CurrentWarComponent', () => {
  let component: CurrentWarComponent;
  let fixture: ComponentFixture<CurrentWarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
