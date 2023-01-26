import { Action, createAction, props } from "@ngrx/store";
import { Institute } from "../../models/institute.model";


export const SetInstituteAction = createAction(
  '[INSTITUTE] Set institute ',
  props<{payload: Institute}>()
);

export const RemoveInstituteAction = createAction(
  '[INSTITUTE] Remove institute ',
  props<{payload: undefined}>()
);