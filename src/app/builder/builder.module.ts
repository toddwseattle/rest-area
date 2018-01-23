import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BuildHomeComponent } from './build-home/build-home.component';
import { builderRouter } from './builder.route';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    builderRouter
  ],
  declarations: [BuildHomeComponent],

})
export class BuilderModule { }
