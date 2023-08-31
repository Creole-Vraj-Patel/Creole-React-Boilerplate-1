import { ActionEnums, Actions } from './actions';
import { GlobalState, initialState } from './initialState';

const globalReducer = (state: GlobalState = initialState, action: Actions): GlobalState => {
  switch (action.type) {
    case ActionEnums.TOGGLE_GLOBAL_LOADER_TRUE:
      return {
        ...state,
        loading: true,
      };
    case ActionEnums.TOGGLE_GLOBAL_LOADER_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default globalReducer;
