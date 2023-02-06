import { InstituteClass } from './class.model';
import { Institute } from './institute.model';
import { User } from './user.model';

export interface State {
  readonly institute: Institute;
  readonly user: User[];
  readonly class: InstituteClass[];
}