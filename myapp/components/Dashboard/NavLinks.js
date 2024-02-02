'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaDumbbell, FaDatabase } from 'react-icons/fa';
import { FiList,  } from 'react-icons/fi';


const links = [
    { name: 'Dashboard', href: '/dashboard',  icon: FaDatabase },
    {
      name: 'Workouts',
      href: '/dashboard/workouts',
      icon: FaDumbbell
    },
    ];
const NavLinks = () => {
    const pathname = usePathname();

  return (
    <div className='flex'>
            <>
  {links.map((link) => {
    const LinkIcon = link.icon;
    return (
      <Link
      key={link.name}
      href={link.href}
      className={clsx(
        'flex h-[48px] grow items-center justify-center rounded-md p-3 text-sm font-medium hover:bg-grey hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'text-orange': pathname === link.href,
        },
      )}
    >
      <LinkIcon className="w-6" />
      <p className="hidden md:block">{link.name}</p>
    </Link>
    );
  })}
</>
    </div>
  )
}

export default NavLinks