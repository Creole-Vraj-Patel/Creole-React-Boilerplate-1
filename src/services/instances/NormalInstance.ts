// Use NormalInstance for all Non-Authenticated routes

import axios from 'axios'

export const NormalInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    accept: 'application/json'
  }
})

// Handle the response
NormalInstance.interceptors.response.use(
  (response: any) => {
    // TODO: Create a condition here as per your api response
    const responseHasData = true

    if (responseHasData) {
      return response
    } else {
      // TODO: write a code below if api hit successfully but BE has sent an error ( Custom error code validation from BE. )

      // Write your code here ( ex: showing toaster message )
      // ------

      // ------

      return response
    }
  },
  (error: any) => {
    return error.response
    // throw new Error('Something went worng. Please try again');
  }
)
