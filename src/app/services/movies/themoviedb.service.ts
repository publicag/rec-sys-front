import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieDetails } from 'src/app/models/movie-details';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  private URL: string = "https://api.themoviedb.org/3/movie/";
  private IMAGES: string = "/images"

  constructor(private httpClient: HttpClient) { }

  getMovieImage(id: string | null): any {
    return this.httpClient.get<any>(this.URL + id + this.IMAGES);
  }

  getMovieDetails(id: string | null): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(this.URL + id);
  }
}
