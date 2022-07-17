import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCoverComponent } from './movie-cover.component';

describe('MovieCoverComponent', () => {
  let component: MovieCoverComponent;
  let fixture: ComponentFixture<MovieCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
