// Use AuthInstance for all Authenticated routes

import axios from 'axios';
import { clearLocalItems, getLocalItem } from '../../utils';
import { NormalInstance } from './NormalInstance';
const accessToken = getLocalItem('access-token');
const baseURL = process.env.REACT_APP_API_BASE_URL;

export const AuthInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    accept: 'application/json',
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
});

// This will make sure that bearer token is passed when calling API
AuthInstance.interceptors.request.use((config) => {
  const accessToken = getLocalItem('access-token');
  if (!accessToken) {
    window.location.href = baseURL + '/';
  }
  config.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : '';
  return config;
});

//  Handle the Response
AuthInstance.interceptors.response.use(
  (response: any) => {
    // TODO: Create a condition here as per your api response
    const responseHasData = true;

    if (responseHasData) {
      return response;
    } else {
      // TODO: write a code below if api hit successfully but BE has sent an error ( Custom error code validation from BE. )

      // Write your code here ( ex: showing toaster message )
      // ------

      // ------

      return response;
    }
  },
  function (error) {
    // TODO: Create a condition here which will check if the token is expired or not.
    const tokenExpired = false;

    if (tokenExpired) {
      clearLocalItems();

      // You can also add the refresh token code below
      // ----

      // ----

      window.location.href = baseURL + '/auth/login';
    } else {
      return error.response;
    }
  },
);

export default NormalInstance;
