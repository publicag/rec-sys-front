import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie';
import { MovieContentDialogComponent } from '../movie-conent-dialog/movie-conent-dialog.component';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.scss']
})
export class MovieCoverComponent{
  @Input() movie!: Movie;
  
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(MovieContentDialogComponent, {backdropClass: 'backdropBackground', data: {movie: this.movie}});
  }
}
