import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { ContentComponent } from './content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    BrowserModule, 
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
  ],
  exports: [ContentComponent],
})
export class ContentModule { }