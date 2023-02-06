import { Action, createReducer, on } from '@ngrx/store';
import { InstituteClass } from 'src/app/models/class.model';
import { User } from 'src/app/models/user.model';
import { RemoveClassAction, SetClassAction } from '../actions/class.action';

const initialState: InstituteClass[] =  [];

const reducer = createReducer(
  initialState,
  on(SetClassAction, (state, action) => {
     return [action.payload];
  }),
  on(RemoveClassAction, (state, action) => {
    return initialState;
  })
);

export function ClassReducer(state: InstituteClass[] | undefined, action: Action) {
 return reducer(state, action);
}