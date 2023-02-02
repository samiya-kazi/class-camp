import { Institute } from "./institute.model";
import { User } from "./user.model";

export interface InstituteUser {
  _id: string,
  institute: Institute,
  user: User,
  type: string
}