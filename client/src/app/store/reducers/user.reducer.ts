import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { RemoveUserAction, SetUserAction } from '../actions/user.action';

const initialState: User[] = [];


const reducer = createReducer(
  initialState,
  on(SetUserAction, (state, action) => {
     return [action.payload];
  }),
  on(RemoveUserAction, (state, action) => {
    return initialState;
  })
);

export function UserReducer(state: User[] | undefined, action: Action) {
 return reducer(state, action);
}