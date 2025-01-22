import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-preview-tab',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './preview-tab.component.html',
  styleUrls: ['./preview-tab.component.scss']
})
export class PreviewTabComponent {
  htmlContent: string = '';
  previewContent: string = '';

  onFileUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.htmlContent = e.target.result;
        this.updatePreview();
      };
      reader.readAsText(file);
    }
  }

  wrapText(before: string, after: string): void {
    const textarea: any = document.getElementById('editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = this.htmlContent.substring(start, end);
    const newText = before + selectedText + after;
    this.htmlContent =
      this.htmlContent.substring(0, start) +
      newText +
      this.htmlContent.substring(end);
    this.updatePreview();
  }

  updatePreview(): void {
    this.previewContent = this.htmlContent;
  }

  downloadHtml(): void {
    const blob = new Blob([this.htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited_file.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}