import React, { type FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalItem } from '../../utils/index'

const PrivateRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = getLocalItem('access-token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login')
    }
  })

  return children
}

export default PrivateRoute
