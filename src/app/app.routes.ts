import { Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { EditorComponent } from './components/editor/editor.component';

export const routes: Routes = [

    {path:'', component:BaseComponent,
        children:[
            {path:'preview' , component: EditorComponent }
        ]
    }
];
