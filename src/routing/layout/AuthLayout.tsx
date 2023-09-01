import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Login = lazy(async () => await import('../../pages/auth/Login'))
const Register = lazy(async () => await import('../../pages/auth/Register'))
const OtpVerification = lazy(
  async () => await import('../../pages/auth/OtpVerification')
)

const AuthLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="otp-verification" element={<OtpVerification />} />
    </Routes>
  )
}

export default AuthLayout
