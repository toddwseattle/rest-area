import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BuildHomeComponent } from './build-home/build-home.component';
import { builderRouter } from './builder.route';
import { UrlInputComponent } from './url-input/url-input.component';
import { MapGroupComponent } from './map-group/map-group.component';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { RespViewComponent } from './resp-view/resp-view.component';
import { IOptionsComponent } from './i-options/i-options.component';
import { IoutCardComponent } from './iout-card/iout-card.component';
import { SubTypeComponent } from './sub-type/sub-type.component';
import { ClipboardModule } from 'ngx-clipboard';
import { HeaderViewComponent } from './header-view/header-view.component';
import { PostBodyComponent } from './post-body/post-body.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrettyJsonModule,
    ClipboardModule,
    builderRouter
  ],
  declarations: [BuildHomeComponent, UrlInputComponent,
    MapGroupComponent, RespViewComponent, IOptionsComponent,
    IoutCardComponent, SubTypeComponent, HeaderViewComponent, PostBodyComponent],
})
export class BuilderModule { }
