import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [FormComponent],
})
export class FormModule { }