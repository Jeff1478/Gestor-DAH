import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCombMetComponent } from './search-comb-met.component';

describe('SearchCombMetComponent', () => {
  let component: SearchCombMetComponent;
  let fixture: ComponentFixture<SearchCombMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCombMetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCombMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
