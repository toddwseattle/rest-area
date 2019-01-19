import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BuilderModule } from "./builder/builder.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "build",
    // change per: https://www.bountysource.com/issues/52474675-angular-5-upgrade-can-t-get-lazy-loading-to-work
    loadChildren: () => BuilderModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
