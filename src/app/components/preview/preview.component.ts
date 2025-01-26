import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @Input() set htmlContent(value: string) {
    this.sanitizedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(value);
    this.rawHtmlContent = value;
  }

  sanitizedHtmlContent: SafeHtml = '';
  rawHtmlContent: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  downloadHTML(): void {
    const blob = new Blob([this.rawHtmlContent], { type: 'text/html' });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `template-${timestamp}.html`;

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(link.href);
  }
}
