'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
    name: string,
    url: string
}

const navLinks:NavLinksProps[] = [
    { name: "home", url: "/" },
    { name: "pokemon", url: "/pokemon" },
    { name: "types", url: "/types" },
    { name: "about", url: "/about" }
]

const Navigation = () => {

    const path = usePathname();

    return (
        <nav className="nav_menu">
            {navLinks.map((item:NavLinksProps,index:number) => <Link  className={`nav_menu__links__${item.name} ${path === item.url ? "active" : ""}`} key ={index} href ={item.url}>{item.name.toUpperCase()}</Link>)}
        </nav>
    )
}

export default Navigation;