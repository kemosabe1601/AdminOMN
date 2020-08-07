import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemRoutingModule } from './problem-routing.module';
import { ProblemComponent } from './problem.component';


@NgModule({
  declarations: [ProblemComponent],
  imports: [
    CommonModule,
    ProblemRoutingModule
  ]
})
export class ProblemModule { }
