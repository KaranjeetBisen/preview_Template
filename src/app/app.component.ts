import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditorComponent } from "./components/editor/editor.component";
import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './components/preview/preview.component';

@Component({
  selector: 'app-root',
  imports: [EditorComponent,HttpClientModule, PreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  htmlContent: string = '';
}
