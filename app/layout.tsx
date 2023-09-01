"use client"
import React, {useState} from "react"
import "./globals.css"
import PC_Menu from "./components/pcmenu"
import Mobile_Menu from "./components/mobilemenu"
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  enum Browser {
    PC = 'PC',
    Mobile = 'Mobile',
    Unknown = 'undefined'
  }

  const [browser, setBrowser] = useState(Browser.Unknown);
  const [contentWidth, setContentWidth] = useState('688px');
  const [marginLeft, setMarginLeft] = useState('0px');

  const loadMenuComponent = () => {
    if (window.innerWidth >= 960) {
      setBrowser(Browser.PC);
      setContentWidth("688px")
      setMarginLeft("0px")
    } else {
      setBrowser(Browser.Mobile);
      setContentWidth("90%")
      setMarginLeft("-2.5rem")
    }
  }

  if (typeof window !== 'undefined') {
    // 在页面加载和窗口大小变化时调用loadMenuComponent函数
    window.addEventListener('load', loadMenuComponent);
    window.addEventListener('resize', loadMenuComponent);
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet"></link>
      </head>
      <body className="flex justify-center">
        {
          browser == Browser.Unknown ? "" : 
            <>
              { browser == Browser.Mobile ? <Mobile_Menu /> : ""}
              <div className="h-full" style={{ width: contentWidth, marginLeft: marginLeft }}>
                {
                  browser == Browser.PC ? <PC_Menu /> : ""
                }
                <div id="content-wrapper" className={browser == Browser.Mobile ? "mt-8 mb-20" : "mt-8 mb-20 ml-28"}>{children}</div>
              </div>
            </>
        }
        <script src="/canvas.js"></script>
        <Analytics />
      </body>
    </html>
  )
}