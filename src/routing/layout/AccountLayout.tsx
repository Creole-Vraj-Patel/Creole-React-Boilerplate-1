import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Dashboard = lazy(
  async () => await import('../../pages/account/Dashboard')
)

const AccountLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/account/dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default AccountLayout
