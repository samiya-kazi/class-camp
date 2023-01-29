import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { RemoveUserAction, SetUserAction } from '../actions/user.action';

const user = localStorage.getItem('user');
const initialState: User[] = user ? [JSON.parse(user)] : [];


const reducer = createReducer(
  initialState,
  on(SetUserAction, (state, action) => {
    localStorage.setItem('user', JSON.stringify(action.payload));
     return [action.payload];
  }),
  on(RemoveUserAction, (state, action) => {
    return initialState;
  })
);

export function UserReducer(state: User[] | undefined, action: Action) {
 return reducer(state, action);
}