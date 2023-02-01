import { User } from "./user.model";

export interface Post {
  classId: string,
  content: string,
  postedDate: Date,
  postedBy: User
}