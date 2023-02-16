import { User } from "./user.model";

export interface Assignment {
  classId: string,
  name: string,
  description: string,
  totalMarks: number,
  postedDate: Date,
  dueDate: Date,
  postedBy: User
}