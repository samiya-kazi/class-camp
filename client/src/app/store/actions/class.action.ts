import { createAction, props } from "@ngrx/store";
import { InstituteClass } from "src/app/models/class.model";


export const SetClassAction = createAction(
  '[InstituteClass] Set class ',
  props<{payload: InstituteClass}>()
);

export const RemoveClassAction = createAction(
  '[InstituteClass] Remove class '
);