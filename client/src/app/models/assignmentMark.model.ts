import { Assignment } from "./assignment.model";
import { User } from "./user.model";

export interface AssignmentMark {
  _id?: string,
  assignment: Assignment,
  student: User,
  marksObtained: number,
  postedDate?: Date,
  status: string
}