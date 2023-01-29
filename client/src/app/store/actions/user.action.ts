import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";


export const SetUserAction = createAction(
  '[USER] Set user ',
  props<{payload: User}>()
);

export const RemoveUserAction = createAction(
  '[USER] Remove user '
);