import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre, Movie } from 'src/app/models/movie';
import { Rate } from 'src/app/models/rate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private moviesURL: string = environment.url + "Movies";
  private ratesURL: string = environment.url + "Ratings/";

  constructor(private httpClient: HttpClient) { 
  }

  getPagedGenreMovies(page: number, pageSize: number, genre: Genre): Observable<Movie[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('pageSize', pageSize)
      .set('genre', genre);
      
    return this.httpClient.get<Movie[]>(this.moviesURL, { params: params });
  }

  getMovie(id: string | null): Observable<Movie> {
    return this.httpClient.get<Movie>(this.moviesURL + id);
  }

  getRate(id: string | null): Observable<string> {
    return this.httpClient.get<string>(this.ratesURL + id);
  } 

  sendRate(rate: Rate): Observable<Rate> {
    rate.rate = rate.rate/2;
    return this.httpClient.post<Rate>(this.ratesURL + 'rateMovie', rate);
  }

  updateRate(rate: Rate): Observable<Rate> {
    rate.rate = rate.rate/2;
    return this.httpClient.put<Rate>(this.ratesURL + 'updateMovieRate', rate);
  }

  getRecommendedMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.moviesURL + '/prediction');
  }

  generatePredGroups(): Observable<number[]> {
    return this.httpClient.get<number[]>(this.ratesURL + 'generatePredGroups');
  }

  generatePred(): Observable<number> {
    return this.httpClient.get<number>(this.ratesURL + 'generatePred');
  }

  getRatedMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.moviesURL + '/ratedMovies');
  }
}
