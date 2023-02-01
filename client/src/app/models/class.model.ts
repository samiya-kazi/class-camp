import { Institute } from "./institute.model"
import { User } from "./user.model"

export interface InstituteClass {
  _id: string,
  name: string,
  section: string,
  description: string,
  institute: Institute,
  teacher: User[],
  students: User[]
}