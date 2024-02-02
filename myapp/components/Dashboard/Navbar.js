'use client'
import Link from 'next/link'
import React from 'react'
import LogoutButton from '../Buttons/Logoutbutton'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ThemeToggle from '../Buttons/ThemeToggle'
import NavLinks from './NavLinks'

const Navbar = () => {
    const session = useSession()
    const router = useRouter()
    if(!session){
        router.push("/")
    }
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between w-full gap-2 bg-orange-400'>
          <Link href={'/dashboard'}>
            LOGO
          </Link>
          <div className='flex items-center gap-2'>
           <NavLinks />
          <ThemeToggle />
          <LogoutButton />
          </div>
        </nav>
    </header>
  )
}

export default Navbar