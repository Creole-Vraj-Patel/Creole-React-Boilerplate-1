import { ActionEnums, type Actions } from './actions'
import { type DashboardState, initialState } from './initialState'

const dashboardReducer = (
  state: DashboardState = initialState,
  action: Actions
): DashboardState => {
  switch (action.type) {
    case ActionEnums.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
}

export default dashboardReducer
