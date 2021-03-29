import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from '../model/movie';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { MovieService } from '../service/movie.service';

const ELEMENT_DATA: Movie[] = [
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
@Component({
  selector: 'app-showcase3',
  templateUrl: './showcase3.component.html',
  styleUrls: ['./showcase3.component.scss']
})
export class Showcase3Component implements OnInit {

  isPopupOpened = true;


  displayedColumns: string[] = ['title', 'episodes', 'info', 'watch', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog,
    private movieService?: MovieService) { }

  ngOnInit(): void {
  }

  get movieList () {
    return this.movieService?.getAllMovieList();
  }

  addMovie() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(MovieFormComponent, {
      width: '400px',
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }


  editMovie(data: any) {
    this.isPopupOpened = true;
    // const movie = this.movieService?.getAllMovieList().find(c => c.ID === id);
    const dialogRef = this.dialog.open(MovieFormComponent, {
      width: '400px',
      data:data
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteMovie(id: number) {
    this.movieService?.deleteMovie(id);
  }

}

