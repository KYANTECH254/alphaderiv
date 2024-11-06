"use client"

import { useState } from "react"

export const useLiveActionMessage = () => {
  const [liveAction, setLiveAction] = useState<any>("Start bot")
  const [liveActionClassName, setLiveActionClassName] =
    useState<any>("warningInfo")
  const [showLiveActionLoader, setShowLiveActionLoader] = useState(false)

  return {
    liveAction,
    liveActionClassName,
    showLiveActionLoader,
    setLiveAction,
    setLiveActionClassName,
    setShowLiveActionLoader,
  }
}
