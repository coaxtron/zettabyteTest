import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {


  movieForm = new FormGroup({
    ID: new FormControl(''),
    title: new FormControl(''),
    episodes: new FormControl(''),
    info_url: new FormControl(''),
    watch_url: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MovieFormComponent>,
  private movieService: MovieService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      ID: [this.data.ID],
      title: [ this.data.title, [Validators.required]],
      episodes: [ this.data.episodes, [Validators.required]],
      info_url: [ this.data.info_url, [Validators.required]],
      watch_url: [ this.data.watch_url , [Validators.required]],
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
   }

   onSubmit(movieForm: NgForm) {
    if (isNaN(this.data.ID)) {
      this.movieService.addMovie(this.movieForm.value);
      // console.log(this.movieForm.value)
      this.dialogRef.close();
    } else {
      this.movieService.editMovie(this.movieForm.value);
      this.dialogRef.close();
    }
  }


}
