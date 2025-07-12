'use client';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();        
  const segment  = pathname.split('/').filter(Boolean).pop(); 
  let title = "" ;
  if(!segment){
     title = 'Dashboard'
  }else{
     title = segment.charAt(0).toUpperCase() + segment.slice(1);
  }

  return (
    <header className="header">
      <span style={{fontWeight:"700"}}>{title}</span>
      <span className='Avatar'>👤</span>
    </header>
  );
}
