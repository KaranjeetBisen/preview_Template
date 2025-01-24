import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() htmlContent: string = '';  

  downloadHTML(): void {
    const blob = new Blob([this.htmlContent], { type: 'text/html' });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `template-${timestamp}.html`;

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    // Revoke the object URL after download
    URL.revokeObjectURL(link.href);
  }

}
