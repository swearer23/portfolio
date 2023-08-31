'use client'
import {AiOutlineHome, AiOutlineUser, AiOutlineRocket, AiOutlineProfile, AiOutlinePhone} from 'react-icons/ai'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Menu() {
  const pathname = usePathname()
  const [location, setLocation] = useState('')

  useEffect(() => {
    return setLocation(pathname)
  }, [pathname])

  const classname = (router: string) => {
    const clsname = location === router ? 'active' : ''
    return clsname
  }

  return (
    <>
      <div className="w-56 mt-10 fixed left-[max(0px,calc(50%-36rem))]">
        <div className="avatar place-self-center flex justify-center mb-10">
          <div className="w-36 rounded-full ring ring-offset-emerald-200 ring-offset-2">
            <img src="/avatar.jpg" />
          </div>
        </div>
        
        <ul className="menu bg-base-200 w-full rounded-lg static h-fit">
          <div className="stats shadow w-full mb-5">
            <div className="stat">
              <div className="stat-title">Hi. My name is</div>
              <div className="stat-value text-lg">Swift Young</div>
              <div className="stat-desc break-words whitespace-normal">I'm a Frontend / Fullstack / Reactjs / Vuejs / Nodejs / Python developer</div>
            </div>
          </div>
          <li><Link href='/' className={classname('/')}><span><AiOutlineHome size={18} style={{ display: "inline-block" }} /></span>Home</Link></li>
          <li><Link href='/about' className={classname('/about')}><span><AiOutlineUser size={18} style={{ display: "inline-block" }} /></span>About</Link></li>
          <li><Link href='/project' className={classname('/project')}><span><AiOutlineRocket size={18} style={{ display: "inline-block" }} /></span>Project</Link></li>
          <li><Link href='/resume' className={classname('/resume')}><span><AiOutlineProfile size={18} style={{ display: "inline-block" }} /></span>Resume</Link></li>
          <li><Link href='/contact' className={classname('/contact')}><span><AiOutlinePhone size={18} style={{ display: "inline-block" }} /></span>Contact</Link></li>
        </ul>
      </div>
    </>
  )
}
