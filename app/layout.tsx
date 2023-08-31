import React from "react"
import "./globals.css"
import Menu from "./components/menu"
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet"></link>
      </head>
      <body className="flex justify-center">
        <div className="h-full" style={{width: '688px'}}>
          <Menu />
          <div className="mt-8 mb-20 ml-28">{children}</div>
        </div>
        <Analytics />
        <script src="/canvas.js"></script>
      </body>
    </html>
  )
}