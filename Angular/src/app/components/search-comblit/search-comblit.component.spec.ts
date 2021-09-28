import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComblitComponent } from './search-comblit.component';

describe('SearchComblitComponent', () => {
  let component: SearchComblitComponent;
  let fixture: ComponentFixture<SearchComblitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComblitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComblitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
