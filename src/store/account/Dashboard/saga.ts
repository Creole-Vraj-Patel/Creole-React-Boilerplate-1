import { takeEvery, put, all, fork, call } from 'redux-saga/effects'
import { ActionEnums } from './actions'
import { ActionEnums as GlobalActionEnums } from '../../global/actions'
import {
  deletePost,
  fetchAllPosts
} from '../../../services/account/Dashboard/index'
import { type GetFnResult } from '../../../interfaces'

export function * getAllPostsDetailsRequestEffect () {
  yield takeEvery(ActionEnums.GET_ALL_POSTS, function * () {
    yield put({
      type: GlobalActionEnums.TOGGLE_GLOBAL_LOADER_TRUE
    })
    try {
      const response: GetFnResult<typeof fetchAllPosts> =
        yield call(fetchAllPosts)
      if (response.data) {
        yield put({
          type: ActionEnums.GET_ALL_POSTS_SUCCESS,
          payload: response.data
        })
      }
    } catch (error: any) {
    } finally {
      yield put({
        type: GlobalActionEnums.TOGGLE_GLOBAL_LOADER_FALSE
      })
    }
  })
}

export function * deletePostRequestEffect () {
  yield takeEvery(
    ActionEnums.DELETE_POST,
    function * ({ payload }: { type: string, payload: string }) {
      yield put({
        type: GlobalActionEnums.TOGGLE_GLOBAL_LOADER_TRUE
      })
      try {
        const response: GetFnResult<typeof deletePost> = yield call(
          deletePost,
          payload
        )
        console.log(response, 'delete')
        if (response.status === 200) {
          yield put({
            type: ActionEnums.GET_ALL_POSTS
          })
        }
      } catch (error: any) {
      } finally {
        yield put({
          type: GlobalActionEnums.TOGGLE_GLOBAL_LOADER_FALSE
        })
      }
    }
  )
}

export default function * DashboardSaga () {
  yield all([
    fork(getAllPostsDetailsRequestEffect),
    fork(deletePostRequestEffect)
  ])
}
