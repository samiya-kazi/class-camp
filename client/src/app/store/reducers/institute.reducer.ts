import { Action, createReducer, on } from '@ngrx/store';
import { SetInstituteAction, RemoveInstituteAction } from '../actions/institute.action';
import { Institute } from 'src/app/models/institute.model';

const initialState: Institute = {_id: '0', name: 'default', type: 'default', description: '', img_url: ''};


const reducer = createReducer(
  initialState,
  on(SetInstituteAction, (state, action) => {
     return action.payload;
  }),
  on(RemoveInstituteAction, (state, action) => {
    return initialState;
  })
);

export function InstituteReducer(state: Institute | undefined, action: Action) {
 return reducer(state, action);
}