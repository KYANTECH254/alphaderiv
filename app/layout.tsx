import "./globals.css"
import "./components.css"
import type { Metadata } from "next"
// import { SubscriptionProvider } from "@/contexts/SubscriptionProvider"
import { Toaster } from 'sonner'
import { AlertTriangleIcon, Check, InfoIcon, X } from "lucide-react"
import { NetworkProvider } from "@/contexts/NetworkProvider"

export const metadata: Metadata = {
  title: "Alphabot Deriv",
  description: "Alphabot Deriv Automated Trading",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Nunito', sans-serif" }}>
        <Toaster
          icons={{
            success: <Check size={24} className="font-bold text-inherit border border-inherit flex items-center justify-center rounded-full" />,
            info: <InfoIcon size={24} className="font-bold text-inherit border border-inherit flex items-center justify-center rounded-full" />,
            warning: <AlertTriangleIcon size={24} className="font-bold text-inherit border border-inherit flex items-center justify-center rounded-full" />,
            error: <X size={24} className="font-bold text-inherit border border-inherit flex items-center justify-center rounded-full" />,
          }}
          toastOptions={{
            classNames: {
              closeButton: 'close-button',
            },
          }}
          position="top-right"
          richColors
          closeButton
        />
        {/* <SubscriptionProvider> */}
          <NetworkProvider>
          {children}
          </NetworkProvider>
        {/* </SubscriptionProvider> */}
      </body>
    </html>
  )
}
