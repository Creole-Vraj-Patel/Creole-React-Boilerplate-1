export enum ActionEnums {
  TOGGLE_GLOBAL_LOADER_TRUE,
  TOGGLE_GLOBAL_LOADER_FALSE,
}

export type Actions =
  | {
      type: ActionEnums.TOGGLE_GLOBAL_LOADER_FALSE;
    }
  | {
      type: ActionEnums.TOGGLE_GLOBAL_LOADER_TRUE;
    };
