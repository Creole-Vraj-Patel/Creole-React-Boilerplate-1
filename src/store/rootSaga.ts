import { all } from 'redux-saga/effects'
import DashboardSaga from './account/Dashboard/saga'

export function * rootSaga () {
  yield all([DashboardSaga()])
}
