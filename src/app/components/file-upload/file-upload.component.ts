import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  @Output() fileUpload = new EventEmitter<string>();

  onFileUpload(event: any) {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.html')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fileUpload.emit(reader.result as string);
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid HTML file.');
    }
  }
}
