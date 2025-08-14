import { Role } from '@prisma/client';

export interface IAttendee {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string | null;
  company?: string | null;
  jobTitle?: string | null;
  role: Role;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateAttendee {
  email: string;
  fullName: string;
  phoneNumber?: string | null; // allow null
  company?: string | null;
  jobTitle?: string | null;
}
