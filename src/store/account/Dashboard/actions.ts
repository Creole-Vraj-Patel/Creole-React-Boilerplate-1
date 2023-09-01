import { type PostDetails } from './initialState'

export enum ActionEnums {
  GET_ALL_POSTS = 'GET_ALL_POSTS',
  GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS',
  GET_ALL_POSTS_FAILED = 'GET_ALL_POSTS_FAILED',
  DELETE_POST = 'DELETE_POST',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
  DELETE_POST_FAILED = 'DELETE_POST_FAILED',
  UPDATE_POST_DATA = 'UPDATE_POST_DATA',
  UPDATE_POST_DATA_SUCCESS = 'UPDATE_POST_DATA_SUCCESS',
  UPDATE_POST_DATA_FAILED = 'UPDATE_POST_DATA_FAILED',
}

export type Actions =
  | {
    type: ActionEnums.GET_ALL_POSTS_SUCCESS
    payload: PostDetails[]
  }
  | {
    type: ActionEnums.GET_ALL_POSTS_FAILED
  }

export const actions = {
  getAllPostsDetails: () => ({
    type: ActionEnums.GET_ALL_POSTS
  }),
  updatePostDetails: (payload: PostDetails) => ({
    type: ActionEnums.UPDATE_POST_DATA,
    payload
  }),
  deletePost: (payload: string) => ({
    type: ActionEnums.DELETE_POST,
    payload
  })
}
