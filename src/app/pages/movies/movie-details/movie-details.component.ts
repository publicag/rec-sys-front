import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MovieDetails } from 'src/app/models/movie-details';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { ThemoviedbService } from 'src/app/services/movies/themoviedb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Observable<MovieDetails>;
  movieRate!: Observable<string>;

  constructor(private tmdbService: ThemoviedbService, private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movie = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.tmdbService.getMovieDetails(params.get('id')))
    );

    this.movieRate = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.movieService.getRate(params.get('movieId')))
    );
  }

}
