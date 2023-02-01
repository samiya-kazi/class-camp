import { User } from "./user.model";

export interface Post {
  _id: string,
  classId: string,
  content: string,
  postedDate: Date,
  postedBy: User,
  comments: Comment[]
}


interface Comment {
  _id: string,
  content: string,
  postedDate: Date,
  postedBy: User
}