import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    DashboardModule, 
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
  ],
  exports: [ContentComponent],
})
export class ContentModule { }