import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre, Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() genre?: Genre;
  @Input() isRated?: boolean;
  movies!: Observable<Movie[]>;

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView: 5,
    loop: true,
    slidesPerGroup: 5,
    loopFillGroupWithBlank: true
  };  

  constructor(private moviesService: MoviesService) { }
  
  ngOnInit(): void {
    if (this.genre) {
      this.movies = this.moviesService.getPagedGenreMovies(Math.floor(Math.random() * (10 - 1 + 1) + 1), 15, this.genre);
    }
    else if (!this.isRated) {
      this.movies = this.moviesService.getRecommendedMovies();
    }
    else {
      this.movies = this.moviesService.getRatedMovies();
    }
  }

}
