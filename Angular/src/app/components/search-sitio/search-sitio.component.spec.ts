import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSitioComponent } from './search-sitio.component';

describe('SearchSitioComponent', () => {
  let component: SearchSitioComponent;
  let fixture: ComponentFixture<SearchSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSitioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
