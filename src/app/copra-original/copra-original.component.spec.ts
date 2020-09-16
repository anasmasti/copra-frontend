import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopraOriginalComponent } from './copra-original.component';

describe('CopraOriginalComponent', () => {
  let component: CopraOriginalComponent;
  let fixture: ComponentFixture<CopraOriginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopraOriginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopraOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
