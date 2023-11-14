'use client'
import { usePathname } from "next/navigation"
export default function AboutLayout({children}) {
    const currentPathName = usePathname();
  return (
    <div>{
        currentPathName !== '/about/about-user' ?
        <h1>This is About Common Layout</h1> : null
        }
        
        <div>This is test</div>
        {children}
    </div>
  )
}
