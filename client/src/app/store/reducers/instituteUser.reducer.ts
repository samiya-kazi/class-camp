import { Action, createReducer, on } from '@ngrx/store';
import { RemoveInstituteUserAction, SetInstituteUserAction } from '../actions/instituteUser.action';
import { InstituteUser } from 'src/app/models/institute-user.model';

const initialState: InstituteUser[] = [];


const reducer = createReducer(
  initialState,
  on(SetInstituteUserAction, (state, action) => {
     return [action.payload];
  }),
  on(RemoveInstituteUserAction, (state, action) => {
    return initialState;
  })
);

export function InstituteUserReducer(state: InstituteUser[] | undefined, action: Action) {
 return reducer(state, action);
}