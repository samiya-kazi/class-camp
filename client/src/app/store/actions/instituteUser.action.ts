import { createAction, props } from "@ngrx/store";
import { InstituteUser } from "src/app/models/institute-user.model";


export const SetInstituteUserAction = createAction(
  '[INSTITUTEUSER] Set instituteUser ',
  props<{payload: InstituteUser}>()
);

export const RemoveInstituteUserAction = createAction(
  '[INSTITUTEUSER] Remove instituteUser '
);