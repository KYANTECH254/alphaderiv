"use client"

import React from "react"

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("accounts")
    window.location.href = "/"
  }

  return (
    <li typeof='button' onClick={handleLogout}>
      LOGOUT
    </li>
  )
}

export default LogoutButton
