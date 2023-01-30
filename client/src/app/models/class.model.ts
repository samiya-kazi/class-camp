import { Institute } from "./institute.model"
import { User } from "./user.model"

export interface InstituteClass {
  name: string,
  section: string,
  description: string,
  institute: Institute,
  teacher: User[],
  students: User[]
}