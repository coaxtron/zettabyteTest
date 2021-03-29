import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcase3Component } from './showcase3.component';

describe('Showcase3Component', () => {
  let component: Showcase3Component;
  let fixture: ComponentFixture<Showcase3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Showcase3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Showcase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
