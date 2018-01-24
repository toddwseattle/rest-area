import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    FlexLayoutModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
