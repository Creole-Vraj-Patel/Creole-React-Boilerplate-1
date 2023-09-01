import React, { type FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalItem } from '../../utils'

const PublicRoute: FC<{ children: JSX.Element }> = ({ children }): any => {
  const isAuthenticated = getLocalItem('access-token')
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account/dashboard')
    }
  })

  return children
}

export default PublicRoute
