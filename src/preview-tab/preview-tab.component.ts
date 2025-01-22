import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Quill from 'quill'; 

@Component({
  selector: 'app-preview-tab',
  imports: [FormsModule, CommonModule],
  templateUrl: './preview-tab.component.html',
  styleUrl: './preview-tab.component.scss'
})
export class PreviewTabComponent {


  selectedFile: File | null = null;
  editorContent: string = ''; // The content of the HTML file in the editor
  isEditorOpen: boolean = false; // To track whether the editor is open

  // Handle file selection
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.loadFileContent();
  }

  // Read and load file content into the editor
  loadFileContent(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editorContent = e.target.result; // Load file content into the editor
      };
      reader.readAsText(this.selectedFile); // Read the HTML file as text
    }
  }

  // Upload the file (optional functionality)
  uploadFile(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      console.log('File selected:', this.selectedFile);
      // Example: Upload to backend server
    } else {
      alert('Please select a file first.');
    }
  }

  // Open the HTML editor
  openEditor(): void {
    if (this.selectedFile) {
      this.isEditorOpen = true; // Show the editor section
    }
  }
}
