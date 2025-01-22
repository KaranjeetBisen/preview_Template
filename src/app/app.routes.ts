import { Routes } from '@angular/router';
import { PreviewTabComponent } from '../preview-tab/preview-tab.component';

export const routes: Routes = [

    {path:'', pathMatch:"full", component: PreviewTabComponent}

];
