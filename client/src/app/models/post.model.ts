import { User } from "./user.model";
import { Comment } from "./comment.model";

export interface Post {
  _id: string,
  classId: string,
  content: string,
  postedDate: Date,
  postedBy: User,
  comments: Comment[]
}