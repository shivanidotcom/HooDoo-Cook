import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaComponent } from './goa.component';

describe('GoaComponent', () => {
  let component: GoaComponent;
  let fixture: ComponentFixture<GoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
