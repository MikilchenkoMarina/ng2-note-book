import {Component, OnInit} from '@angular/core';
import {NoteDataService} from "./note-data.service";
import {Note} from "./note";

@Component({
  selector: 'app-root',
  template: `
<section class="noteapp">
    <h1>My Notes</h1>
  <app-note-add (add)="onAddNote($event)"></app-note-add>
  <app-note-list [notes]="notes" ></app-note-list>
</section>
`,
  styleUrls: ['styles.css'],
  providers: [NoteDataService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private noteDataService: NoteDataService) {
  }
  notes: Note[] = [];

  public ngOnInit() {
    this.noteDataService.getAllNotes()
      .subscribe(
        (notes) => {
          this.notes = notes;
        }
      )
  }

  onAddNote(note) {
    this.noteDataService
      .addNote(note)
      .subscribe(
        (newNote) => {
          this.notes = this.notes.concat(newNote);
        }
      );
  }
}
