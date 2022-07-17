import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { MovieDetails } from 'src/app/models/movie-details';
import { MovieRate } from 'src/app/models/movieRate';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { ThemoviedbService } from 'src/app/services/movies/themoviedb.service';

@Component({
  selector: 'app-movie-conent-dialog',
  templateUrl: './movie-conent-dialog.component.html',
  styleUrls: ['./movie-conent-dialog.component.scss']
})
export class MovieContentDialogComponent implements OnInit, OnDestroy {
  movie!: Observable<MovieDetails>;
  private subscribtion: Subscription = new Subscription();
  starRating = 0;
  databaseRating = 0;

  constructor(public dialogRef: MatDialogRef<MovieContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private tmdbService: ThemoviedbService, 
    private movieService: MoviesService) {}

  ngOnDestroy(): void {
    let rate: MovieRate = {
      movieId: this.data.movie.id,
      rate: this.starRating
    };
    if (this.databaseRating != this.starRating && this.databaseRating == 0) {
      this.subscribtion.add(
        this.movieService.sendRate(rate).subscribe(() => this.subscribtion.unsubscribe())
        );
      }
    else if (this.databaseRating != this.starRating) {
      this.subscribtion.add(
        this.movieService.updateRate(rate).subscribe(() => 
        {
          this.subscribtion.unsubscribe()
        })
      );
    }
  }

  ngOnInit(): void {
    this.movie = this.tmdbService.getMovieDetails(this.data.movie.tmdbId);
    this.subscribtion.add(
      this.movieService.getRate(this.data.movie.id).subscribe(movieRate => {
        this.starRating = Number(movieRate) * 2;
        this.databaseRating = this.starRating;
        console.log(this.databaseRating);
      })
    );
  }
}