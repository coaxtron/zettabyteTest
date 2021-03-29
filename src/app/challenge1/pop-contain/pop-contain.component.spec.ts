import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopContainComponent } from './pop-contain.component';

describe('PopContainComponent', () => {
  let component: PopContainComponent;
  let fixture: ComponentFixture<PopContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopContainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
