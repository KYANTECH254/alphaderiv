"use client"
import { myPref } from "@/lib/Preferences"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const useWebsokets = ({
  token,
  setToastMessage,
  setToastType,
}: {
  token: string
  setToastMessage: Dispatch<SetStateAction<any>>
  setToastType: Dispatch<SetStateAction<any>>
}) => {
  const [messages, setMessages] = useState()
  const [connected, setConnected] = useState(false)
  const [socket, setSocket] = useState<any>()

  useEffect(
    function () {
      let ws = new WebSocket(`${myPref.wsUrl}${myPref.appId}`)

      ws.onopen = function (e) {
        ws.send(
          JSON.stringify({
            authorize: token,
          })
        )

        ws.send(
          JSON.stringify({
            ping: 1,
          })
        )

        setInterval(function () {
          ws.send(
            JSON.stringify({
              ping: 1,
            })
          )
        }, 15000)
      }

      ws.onmessage = function (event) {
        const message = JSON.parse(event.data)
        setMessages(message)
      }

      ws.onclose = function (event) {
        if (event.wasClean) {
          setToastMessage(`[close] Connection closed cleanly`)
          setToastType("success")
        } else {
          setToastMessage(`[close] Connection died`)
          setToastType("error")
        }
      }

      ws.onerror = function (error) {
        setToastMessage(error)
        setToastType("error")
        console.log(error)
      }

      setSocket(ws)
    },
    [token]
  )

  return {
    connected,
    setConnected,
    messages,
    socket,
  }
}
