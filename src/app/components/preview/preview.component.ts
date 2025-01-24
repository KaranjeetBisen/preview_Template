import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log("******************************Preview********************************\n"+ this.content);
  }
  @Input() content: string = '';
  
  
}
