import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRivalComponent } from './info-rival.component';

describe('InfoRivalComponent', () => {
  let component: InfoRivalComponent;
  let fixture: ComponentFixture<InfoRivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
