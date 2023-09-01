import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setLocalItem } from '../../utils'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    setLocalItem('access-token', 'some-random-access-token-string')
    navigate('/account/dashboard')
  }

  return <button onClick={handleLogin}>Click here to login</button>
}

export default Login
