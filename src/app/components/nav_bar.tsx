"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function NavBar() {

    const path = usePathname();

    const getLinkClass = (urlPath: String) => {
        let classString = path === urlPath ? 'text-colorPrimary' : 'text-dullNav';
        classString += ' mx-4 hover:text-colorPrimary';
        return classString
    }
  return (
    <div className="flex flex-row items-center justify-between my-12">
    <div className="text-5xl text-colorPrimary">Hai</div>
    <div className="flex flex-row items-center justify-between text-xl" >
        <Link href="/" className={getLinkClass('/')}>HOME</Link>
        <Link href="/culture" className={getLinkClass('/culture')}>CULTURE</Link>
        <Link href="/work" className={getLinkClass('/work')}>WORK</Link>
        <Link href="/insights" className={getLinkClass('/culture')}>INSIGHTS</Link>
        <Link href="/inquire" className={getLinkClass('/culture')}>INQUIRE</Link>
    </div>
    </div>
  )
}

export default NavBar