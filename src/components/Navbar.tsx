'use client'

import Image from "next/image"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"


const Navbar = () => {
    const router = useRouter()
    return (
        <nav className="sticky inset-0 z-50">
            <div className="bg-black mx-auto px-8 md:px-32">
                <div className="flex items-center justify-between">
                    <Image src="/Logo.PNG" alt="Logo" width={60} height={60} onClick={() => router.push("/")} className="cursor-pointer" />
                    <div className="hidden md:block">
                        <div className="flex cursor-pointer items-center gap-10">
                            <h2 className="text-mythemes-yellow cursor-pointer text-sm"><Link href="/">Home</Link></h2>
                            <h2 className="text-mythemes-yellow cursor-pointer text-sm"><Link href="/about">About Us</Link></h2>
                            <h2 className="text-mythemes-yellow cursor-pointer text-sm"><Link href="/products">Products</Link></h2>
                            <h2 className="text-mythemes-yellow cursor-pointer text-sm"><Link href="/teams">Our Community</Link></h2>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="block md:hidden">
                            <Button variant="ghost">
                                <Menu className="text-mythemes-yellow" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><Link href="/">Home</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href="/about">About Us</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href="/products">Products</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href="/teams">Our Community</Link></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar