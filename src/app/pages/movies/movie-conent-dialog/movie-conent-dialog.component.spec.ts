import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContentDialogComponent } from './movie-conent-dialog.component';

describe('MovieConentDialogComponent', () => {
  let component: MovieContentDialogComponent;
  let fixture: ComponentFixture<MovieContentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieContentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
