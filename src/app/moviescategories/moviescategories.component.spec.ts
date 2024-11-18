import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescategoriesComponent } from './moviescategories.component';

describe('MoviescategoriesComponent', () => {
  let component: MoviescategoriesComponent;
  let fixture: ComponentFixture<MoviescategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviescategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviescategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
