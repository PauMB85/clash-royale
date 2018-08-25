import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTeamsComponent } from './info-teams.component';

describe('InfoTeamsComponent', () => {
  let component: InfoTeamsComponent;
  let fixture: ComponentFixture<InfoTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
