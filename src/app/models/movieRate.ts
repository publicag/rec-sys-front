import { Rate } from "./rate";

export class MovieRate implements Rate {
    movieId: string;
    rate: number;

    constructor(movie: string, value: number) {
        this.movieId = movie;
        this.rate = value;
    }
}