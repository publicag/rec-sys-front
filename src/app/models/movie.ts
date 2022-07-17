export interface Movie {
    id: number;
    title: string;
    genres: Genre[];
    imdbId: number;
    tmdbId: number;
    imageURL: string;
}

export enum Genre {
    Action = "Action",
    Adventure = "Adventure",
    Animation = "Animation",
    Childrens = "Childrens",
    Comedy = "Comedy",
    Crime = "Crime",
    Documentary = "Documentary",
    Drama = "Drama",
    Fantasy = "Fantasy",
    FilmNoir = "Film noir",
    Horror = "Horror",
    Musical = "Musical",
    Mystery = "Mystery",
    Romance = "Romance",
    SciFi = "Sci-Fi",
    Thriller = "Thriller",
    War  = "War",
    Western = "Western",
    // NoGenre = "No genre"
}