// src/app/student-list/student-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Student } from '../models';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [
    { firstName: 'Giorgi', lastName: 'Beridze', personalNumber: '123456', GPA: 3.5, status: 'active' },
    { firstName: 'Nino', lastName: 'Naneishvili', personalNumber: '654321', GPA: 3.8, status: 'suspended' },
    { firstName: 'Maka', lastName: 'Javakhishvili', personalNumber: '789012', GPA: 3.2, status: 'terminated' },
    { firstName: 'Irakli', lastName: 'Kakhadze', personalNumber: '456789', GPA: 3.9, status: 'active' },
    { firstName: 'Tamar', lastName: 'Gagnidze', personalNumber: '321654', GPA: 2.8, status: 'active' },
    { firstName: 'David', lastName: 'Kobakhidze', personalNumber: '987654', GPA: 3.0, status: 'suspended' },
    { firstName: 'Ana', lastName: 'Chikovani', personalNumber: '159753', GPA: 3.6, status: 'active' },
    { firstName: 'Sandro', lastName: 'Mgeladze', personalNumber: '753159', GPA: 2.5, status: 'terminated' },
    { firstName: 'Keti', lastName: 'Zedginidze', personalNumber: '258147', GPA: 3.7, status: 'active' },
    { firstName: 'Davit', lastName: 'Shengelia', personalNumber: '852369', GPA: 3.4, status: 'suspended' },
  ];
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  sortList(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.students.sort((a, b) => {
      const aValue = (a as any)[column];
      const bValue = (b as any)[column];
      if (this.sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  shuffleList() {
    this.students.sort(() => Math.random() - 0.5);
  }
}
