import { Routes } from '@angular/router';
import { PreviewTabComponent } from '../preview-tab/preview-tab.component';
import { Preview2Component } from '../preview2/preview2.component';

export const routes: Routes = [

    {path:'', pathMatch:"full", component: Preview2Component}

];
