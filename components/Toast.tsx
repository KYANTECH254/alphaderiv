"use client"

import React, { useState, useEffect } from "react"

interface ToastProps {
  message: string
  type: "success" | "error" | "info"
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (message && type) {
      setShowToast(true)
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [message, type])
  return <>{showToast && <div className={`toast ${type}`}>{message}</div>}</>
}

export default Toast
