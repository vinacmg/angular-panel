import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ContentModule } from '../content/content.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    ContentModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule { }