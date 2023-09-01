import { AuthInstance } from '../../instances/AuthInstance'
import { apiEndpoints } from '../../../constants/apiEndpoints'
import { apiMethods } from '../../../constants/enums'
import { type addPostPayload } from './payloadTypes'

export const fetchAllPosts = async () => {
  return await AuthInstance({
    method: apiMethods.GET,
    url: apiEndpoints.getPosts
  })
}

export const deletePost = async (postId: string) =>
  await AuthInstance({
    method: apiMethods.DELETE,
    url: apiEndpoints.deletePost.replace(':postId', postId)
  })

export const addPost = async (payload: addPostPayload) =>
  await AuthInstance({
    method: apiMethods.POST,
    url: apiEndpoints.addPost,
    data: { ...payload }
  })
