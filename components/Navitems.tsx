'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navitems = [
    { label : 'Home' , href : "/"},
    { label : 'Companions' , href : "/companions"},
    { label : 'My Journey' , href : "/my_journey"},

]

const Navitems = () => {
    const pathname = usePathname();
    
  return (
    <nav className="flex item-center gap-4">
        {navitems.map(({label , href})=>
        (
            <Link
            href={href}
            key={label}
            className={cn(pathname === href && 'text-primary font-semibold')}
            >
             {label}
            </Link>
        )
        )}

    </nav>
  )
}

export default Navitems