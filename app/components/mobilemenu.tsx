'use client'
import {AiOutlineHome, AiOutlineUser, AiOutlineRocket, AiOutlineProfile, AiOutlinePhone} from 'react-icons/ai'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Menu() {
  const pathname = usePathname()
  const [location, setLocation] = useState('')

  useEffect(() => {
    const elem = document.activeElement as HTMLElement
    if (elem) elem?.blur()
    setLocation(pathname)
  }, [pathname])

  const classname = (router: string) => {
    const clsname = location === router ? 'active' : ''
    return clsname
  }

  return (
    <>
      <div className="navbar bg-base-100 fixed">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href='/' className={classname('/')}>Home</Link></li>
            <li><Link href='/about' className={classname('/about')}>About</Link></li>
            <li><Link href='/project' className={classname('/project')}>Project</Link></li>
            <li><Link href='/resume' className={classname('/resume')}>Resume</Link></li>
            <li><Link href='/contact' className={classname('/contact')}>Contact</Link></li>
          </ul>
        </div>
        <div className="flex-1">
          <a className="normal-case text-xl mr-4 ml-1"><span className='text-emerald-200'>S</span><span>wift</span></a>
          <span className='text-xs'>
            Frontend / Fullstack / Reactjs / Vuejs / Nodejs / Python
          </span>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/avatar.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}