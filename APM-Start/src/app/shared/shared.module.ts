import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-space.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ConvertToSpacePipe,
    StarComponent
  ]
})
export class SharedModule { }
