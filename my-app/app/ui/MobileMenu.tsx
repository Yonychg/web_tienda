"use client";
import { AlignLeft } from 'lucide-react'
import SiteMenu from './SiteMenu'
import { useState } from 'react'
const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen]=useState(false);
  return (
    <>
    <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer"/>
    </button>
    <div className='md:hidden'>
      <SiteMenu
      isOpen={isSidebarOpen}
      onClose={()=>setIsSidebarOpen(false)}
      />
    </div>    
    </>
  )
}

export default MobileMenu