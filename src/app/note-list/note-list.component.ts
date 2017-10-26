import {Component, Input} from '@angular/core';
import {Note} from "../note";

@Component({
  selector: 'app-note-list',
  template: `
  <section class="main">
    <ul class="note-list">
      <li *ngFor="let note of notes">
        <div class="view">
            <label>{{note.id}}. {{note.title}} : {{note.text}}</label>
        </div>
      </li>
    </ul>
  </section>
`,
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  @Input()
  notes: Note[];

  constructor() {
  }
}
