import { Component } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent],
  template: '<app-student-list></app-student-list>',
})
export class AppComponent {
  title = 'Student Management'; // Add this line
}
