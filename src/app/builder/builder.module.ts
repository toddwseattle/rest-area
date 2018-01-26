import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BuildHomeComponent } from './build-home/build-home.component';
import { builderRouter } from './builder.route';
import { UrlInputComponent } from './url-input/url-input.component';
import { MapGroupComponent } from './map-group/map-group.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    builderRouter
  ],
  declarations: [BuildHomeComponent, UrlInputComponent, MapGroupComponent],

})
export class BuilderModule { }