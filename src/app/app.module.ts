import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BuilderModule } from './builder/builder.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
