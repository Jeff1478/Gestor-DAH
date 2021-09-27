import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCombCeraComponent } from './search-comb-cera.component';

describe('SearchCombCeraComponent', () => {
  let component: SearchCombCeraComponent;
  let fixture: ComponentFixture<SearchCombCeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCombCeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCombCeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
