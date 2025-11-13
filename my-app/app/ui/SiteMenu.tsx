import React, { FC } from 'react'
interface SitebarProps{
    isOpen:boolean;
    onClose:()=> void;
}

const SiteMenu:FC<SidebarProps> = ({isOpen,onClose}) => {
  return (
    <div className={`fixed inset-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${isOpen?"translate-x-0":"-translate-x-full"}`}>SiteMenu</div>
  )
}

export default SiteMenu