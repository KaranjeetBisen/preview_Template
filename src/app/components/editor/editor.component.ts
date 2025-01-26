import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  imports:[AngularEditorModule, FormsModule, HttpClientModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorComponent {
  htmlContent: string = '';
  isEditorVisible: boolean = false; // Controls the visibility of the editor
  uploadedFileName: string = ''; // To store the uploaded file name
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      { name: 'quote', class: 'quote' },
      { name: 'redText', class: 'redText' },
      { name: 'titleText', class: 'titleText', tag: 'h1' },
    ]
  };

  onContentChange() {
    this.contentChange.emit(this.htmlContent);
  }

  clearEditor() {
    this.htmlContent = '';
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadedFileName = file.name; // Store the file name
      const reader = new FileReader();
      reader.onload = (e) => {
        this.htmlContent = e.target?.result as string;
      };
      reader.readAsText(file);
    }
  }

  toggleEditorVisibility(): void {
    this.isEditorVisible = !this.isEditorVisible; // Toggle editor visibility
  }
}
