import { MovieService } from './service/movie.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Challenge4RoutingModule } from './challenge4-routing.module';
import { Showcase3Component } from './showcase3/showcase3.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [Showcase3Component, MovieFormComponent],
  imports: [
    CommonModule,
    Challenge4RoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [MovieService],
})
export class Challenge4Module { }
