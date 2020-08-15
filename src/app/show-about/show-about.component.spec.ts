import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAboutComponent } from './show-about.component';

describe('ShowAboutComponent', () => {
  let component: ShowAboutComponent;
  let fixture: ComponentFixture<ShowAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
