"use client";
import { AlignLeft } from 'lucide-react'
import SiteMenu from './SiteMenu'
import { useState } from 'react'
const MobileMenu = () => {
  const [isSidebarOpen, SetIsSidebarOpen]=useState(false);
  return (
    <>
    <button onClick={()=>SetIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer"/>
    </button>
    <div className='md:hidden'>
      <SiteMenu
      isOpen={isSidebarOpen}
      OnClose={()=>SetIsSidebarOpen(false)}
      />
    </div>    
    </>
  )
}

export default MobileMenu