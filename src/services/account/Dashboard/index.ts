import { AuthInstance } from '../../instances/AuthInstance';
import { apiEndpoints } from '../../../constants/apiEndpoints';
import { apiMethods } from '../../../constants/enums';
import { addPostPayload } from './payloadTypes';

export const fetchAllPosts = () => {
  return AuthInstance({
    method: apiMethods.GET,
    url: apiEndpoints.getPosts,
  });
};

export const deletePost = (postId: string) =>
  AuthInstance({
    method: apiMethods.DELETE,
    url: apiEndpoints.deletePost.replace(':postId', postId),
  });

export const addPost = (payload: addPostPayload) =>
  AuthInstance({
    method: apiMethods.POST,
    url: apiEndpoints.addPost,
    data: { ...payload },
  });
