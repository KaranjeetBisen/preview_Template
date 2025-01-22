import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewComponent } from "./components/preview/preview.component";
import { EditorComponent } from "./components/editor/editor.component";
import { FileUploadComponent } from "./components/file-upload/file-upload.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreviewComponent, EditorComponent, FileUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  htmlContent: string = '';
  previewContent: string = '';

  updatePreview(content: string) {
    this.previewContent = content;
  }
  
  downloadHtml() {
    const blob = new Blob([this.htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'email-template.html';
    link.click();
  }

  onFileUpload(fileContent: string) {
    this.htmlContent = fileContent;  // Set the content from file
    this.updatePreview(this.htmlContent);  // Update the preview
  }
}
