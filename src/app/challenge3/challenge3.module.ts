import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Challenge3RoutingModule } from './challenge3-routing.module';
import { Challenge1Module } from '../challenge1/challenge1.module';
import { Showcase2Component } from './showcase2/showcase2.component';


@NgModule({
  declarations: [Showcase2Component],
  imports: [
    CommonModule,
    Challenge3RoutingModule,
    Challenge1Module
  ]
})
export class Challenge3Module { }
