import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Auth } from "../components/Authorization"

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to='/login' replace />} />
      <Route path='/login' element={<Auth />} />
      {/* <Route path={REGISTER} element={<Registration />} /> */}
    </Routes>
  )
}