// src/app/models.ts
export interface Student {
    firstName: string;
    lastName: string;
    personalNumber: string;
    GPA?: number;
    status: 'active' | 'suspended' | 'terminated';
  }
  