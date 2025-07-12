"use client";                   // needed for useState in the App Router
import { useState } from "react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { LuExpand } from "react-icons/lu";
import { FaCalendarAlt, FaCompressArrowsAlt, FaShoppingBag, FaShoppingCart, FaUserShield } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import "./Sidebar.css";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

   const pathname = usePathname();        
    const segment  = pathname.split('/').filter(Boolean).pop(); 
    let title = "" ;
    if(!segment){
       title = 'Dashboard'
    }else{
       title = segment.charAt(0).toUpperCase() + segment.slice(1);
    }

  return (
    <aside className={`sidebar ${expanded ? "expanded" : ""}`}>

      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>     
        {!expanded ?<LuExpand/> : <IoMdCloseCircleOutline/>}
      </button>

      <nav>
        <Link href="/"        title="Dashboard" style={{ backgroundColor: title === 'Dashboard' ? "#1f2937" : "transparent"}}><RxDashboard /><span>Dashboard</span></Link>
        <Link href="/events" title="Calendar" style={{ backgroundColor: title === 'Events' ? "#1f2937" : "transparent"}} ><FaCalendarAlt /><span>Events</span></Link>
        <Link href="/gallery" title="Gallery" style={{ backgroundColor: title === 'Gallery' ? "#1f2937" : "transparent"}} ><GrGallery /><span>Gallery</span></Link>
        <Link href="/shopping"  title="Orders" style={{ backgroundColor: title === 'Shopping' ? "#1f2937" : "transparent"}} ><FaShoppingBag /><span>Shopping</span></Link>
        <Link href="/payments"    title="Cart" style={{ backgroundColor: title === 'Payments' ? "#1f2937" : "transparent"}} ><FaShoppingCart /><span>Payments</span></Link>
        <Link href="/account"   title="Admin" style={{ backgroundColor: title === 'Account' ? "#1f2937" : "transparent"}} ><FaUserShield /><span>Account</span></Link>
        <Link href="/settings" title="Settings" style={{ backgroundColor: title === 'Settings' ? "#1f2937" : "transparent"}} ><IoSettingsOutline /><span>settings</span></Link>
      </nav>
    </aside>
  );
}
