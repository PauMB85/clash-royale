import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMeComponent } from './info-me.component';

describe('InfoMeComponent', () => {
  let component: InfoMeComponent;
  let fixture: ComponentFixture<InfoMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
