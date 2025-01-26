import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DoCheck, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  imports:[AngularEditorModule, FormsModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorComponent implements DoCheck{

  // Content to be edited
  htmlContent: string = '';
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '37rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    defaultFontSize: '14px',
    toolbarHiddenButtons: [['bold']],
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
  };  

  onContentChange(): void {
    const editorElement = document.querySelector('.angular-editor-textarea');
    if (editorElement) {
      const styledHtml = editorElement.innerHTML;
      this.contentChange.emit(styledHtml);
    }
  }

  ngDoCheck(): void {
    // console.log(this.htmlContent);
    this.onContentChange();
  }

  clearEditor() {
    this.htmlContent = '';
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.htmlContent = e.target?.result as string;
        console.log("htmlcontent Updated with file content:"+this.htmlContent);
      };
      reader.readAsText(file);
    }
  }
}
