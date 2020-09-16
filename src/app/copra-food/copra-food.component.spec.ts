import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopraFoodComponent } from './copra-food.component';

describe('CopraFoodComponent', () => {
  let component: CopraFoodComponent;
  let fixture: ComponentFixture<CopraFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopraFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopraFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
