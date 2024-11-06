"use client"

import { useState } from "react"

export const useToast = () => {
  const [toastMessage, setToastMessage] = useState<string>()
  const [toastType, setToastType] = useState<string>()

  return { toastMessage, toastType, setToastMessage, setToastType }
}
