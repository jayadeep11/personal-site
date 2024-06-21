import React from 'react'
import { navItems, } from "../constants";


const Header = () => {
  return (
    <div className='blackk flex flex-col justify-center items-center h-[100vh]'>
      <div className='font-bold text-4xl md:text-5xl lg:text-7xl'>
        <ul className='Acorn flex flex-col justify-center items-center gap-10 lg:gap-20'>
          {
            navItems.map((item) => (
              <li key={item.label}><a className='transition-all hover:text-orange-600' href={item.href}>{item.label}</a></li>
            ))
          }
        </ul>
      </div>
    </div>

  )
}

export default Header
