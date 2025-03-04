"use client"
import { myPref } from "@/lib/Preferences"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { toast } from "sonner"

export const useWebsokets = ({
  token,
}: {
  token: string
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
          toast.success("[close] Connection closed cleanly", {
            duration: 5000,
            classNames: {
              toast: 'toast-success',
            }
          });
        } else {
          toast.error("[close] Connection died", {
            duration: 5000,
            classNames: {
              toast: 'toast-error',
            }
          });
        }
      }

      ws.onerror = function (error) {
        // toast.error(`${error}`, {
        //   duration: 5000,
        //   classNames: {
        //     toast: 'toast-error',
        //   }
        // });
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
