import { combineReducers } from 'redux';
import globalReducer from './global/reducer';
import dashboardReducer from './account/Dashboard/reducer';

const rootReducer = combineReducers({
  globalReducer,
  dashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
