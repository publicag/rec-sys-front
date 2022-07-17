import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Genre, Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  visibleGenres: Genre[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateGenres();
  }

  generateGenres(): void {
    let i = 0;
    if (this.visibleGenres.length < 12) {
      while (i < 3) {
        let generatedGenre = this.randomEnum(Genre);
        if (!this.visibleGenres.includes(generatedGenre)) {
          this.visibleGenres.push(generatedGenre);
          i++;
        }
      }
    }
  }

  randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex];
  }
}
