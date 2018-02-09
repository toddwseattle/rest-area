import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RestXService } from '../rest-x.service';
import { GoogleTagService } from './google-tag.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [RestXService, GoogleTagService]
})
export class CoreModule { }
