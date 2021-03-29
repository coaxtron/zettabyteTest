import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcase1Component } from './showcase1.component';

describe('Showcase1Component', () => {
  let component: Showcase1Component;
  let fixture: ComponentFixture<Showcase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Showcase1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Showcase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
