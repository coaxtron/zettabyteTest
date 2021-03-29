import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';



@Injectable()
export class MovieService {

  MovieList: Movie[] = [
    {
      ID: 1,
      title: 'Shingeki no Kyojin: The Final Season',
      episodes: 16,
      info_url: 'https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season',
      watch_url: 'https://www12.9anime.to/watch/attack-on-titan-final-season.k524/ep-1'
    },
    {
      ID: 2,
      title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
      episodes: 1,
      info_url: 'https://myanimelist.net/anime/40456/Kimetsu_no_Yaiba_Movie__Mugen_Ressha-hen',
      watch_url: 'https://demonslayer-anime.com/risshihen/streaming/'
    },
    {
      ID: 3,
      title: 'Start-Up',
      episodes: 16,
      info_url: 'https://asianwiki.com/Start-Up_(Korean_Drama)',
      watch_url: 'https://kissasians.org/detail/start-up-2020/'
    },
  ];

  constructor() { }

  addMovie(movie: Movie) {
    movie.ID = this.MovieList.length + 1;
    this.MovieList.push(movie);
  }

  editMovie(movie: Movie) {
    const index = this.MovieList.findIndex(c => c.ID === movie.ID);
    this.MovieList[index] = movie;
  }

  deleteMovie(id: number) {
    const movie = this.MovieList.findIndex(c => c.ID === id);
    this.MovieList.splice(movie, 1);
  }

  getAllMovieList() {
    return this.MovieList;
  }
}
