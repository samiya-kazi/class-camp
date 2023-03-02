import { User } from "./user.model";

export interface Assignment {
  _id: string,
  classId: string,
  name: string,
  description: string,
  totalMarks: number,
  postedDate: Date,
  dueDate: Date,
  postedBy: User
}