import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlocationComponent } from './searchlocation.component';

describe('SearchlocationComponent', () => {
  let component: SearchlocationComponent;
  let fixture: ComponentFixture<SearchlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchlocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
