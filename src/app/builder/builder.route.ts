import { Routes, RouterModule } from '@angular/router';
import { BuildHomeComponent } from './build-home/build-home.component';

const BuilderRoutes: Routes = [
    {
        path: '',
        component: BuildHomeComponent
    }
];

export const builderRouter = RouterModule.forChild(BuilderRoutes);
