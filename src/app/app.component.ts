import {Component, OnInit} from '@angular/core';
import {NoteDataService} from "./note-data.service";
import {Note} from "./note";

@Component({
  selector: 'app-root',
  template: `
<section class="noteapp">
    <h1>My Notes</h1>
    
     <!--<input class="new-note" placeholder="Add new Note" autofocus="" [(ngModel)]="newNote.title" (keyup.enter)="addNote()">--> 
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

  // via component properties set up values !**impl 1 (without  nested component )ng
  /*// newNote: Note = new Note();

   addNote() {
   this.noteDataService.addNote(this.newNote);
   this.newNote = new Note();
   }

   //  !**impl 2 (with  nested component )
   // Add new method to handle event emitted by TodoListHeaderComponent
   onAddNote(note: Note) {
   this.noteDataService.addNote(note);
   }
   getNotes() {
   return this.noteDataService.getAllNotes();
   }
   */
  //  !**impl 3 (with  nested component and api servise  )
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
