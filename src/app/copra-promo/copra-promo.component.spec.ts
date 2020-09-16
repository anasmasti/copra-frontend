import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopraPromoComponent } from './copra-promo.component';

describe('CopraPromoComponent', () => {
  let component: CopraPromoComponent;
  let fixture: ComponentFixture<CopraPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopraPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopraPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
