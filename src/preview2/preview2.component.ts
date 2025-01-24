import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-preview2',
  imports: [FormsModule],
  templateUrl: './preview2.component.html',
  styleUrl: './preview2.component.scss'
})
export class Preview2Component {

  editorData: string = ''; // Store the editor content

  // Method called when CKEditor is ready
  onEditorReady(editor: any) {
    console.log('CKEditor is ready');
  }

  // Method for handling file input change and reading the file
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.editorData = reader.result as string; // Store the file content in editorData
      };
      reader.readAsText(file);
    }
  }

  // Method for downloading the file from editor data
  downloadFile() {
    const blob = new Blob([this.editorData], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited_file.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
