import React from "react"
import "./globals.css"
import Menu from "./components/menu"

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
        <script src="https://tarptaeya.github.io/repo-card/repo-card.js"></script>
      </head>
      <body>
        <div className="flex justify-center">
          <Menu />
          <div className="artboard artboard-horizontal phone-4 mt-10">{children}</div>
        </div>
      </body>
    </html>
  )
}