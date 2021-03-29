import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Challenge1RoutingModule } from './challenge1-routing.module';
import { CardComponent } from './card/card.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PopContainComponent } from './pop-contain/pop-contain.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    CardComponent,
    ShowcaseComponent,
    PopContainComponent
  ],
  imports: [
    CommonModule,
    Challenge1RoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [
    PopContainComponent
  ],
  exports: [
    CardComponent
  ]
})
export class Challenge1Module { }
