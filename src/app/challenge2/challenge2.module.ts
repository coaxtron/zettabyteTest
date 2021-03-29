import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Challenge2RoutingModule } from './challenge2-routing.module';
import { Showcase1Component } from './showcase1/showcase1.component';
import { PriceCardComponent } from './price-card/price-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [Showcase1Component, PriceCardComponent],
  imports: [
    CommonModule,
    Challenge2RoutingModule,
    MatCardModule
  ]
})
export class Challenge2Module { }
