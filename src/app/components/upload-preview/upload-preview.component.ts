import { Component } from '@angular/core';
import { EditorComponent } from "../editor/editor.component";
import { PreviewComponent } from "../preview/preview.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-preview',
  imports: [EditorComponent, PreviewComponent, CommonModule],
  templateUrl: './upload-preview.component.html',
  styleUrl: './upload-preview.component.scss'
})
export class UploadPreviewComponent {
  htmlContent: string = '';
  showPreview: boolean = true; // Initially true to show the preview

  togglePreview() {
    this.showPreview = !this.showPreview;
  }
}
