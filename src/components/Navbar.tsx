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


const Navbar = () => {
    const router = useRouter()
    return (
        <nav className="sticky inset-0 z-50">
            <div className="bg-black mx-auto px-8 md:px-32">
                <div className="flex items-center justify-between">
                    <Image src="/Logo.PNG" alt="Logo" width={60} height={60} onClick={()=>router.push("/")} className="cursor-pointer" />
                    <div className="hidden md:block">
                    <div className="flex cursor-pointer items-center gap-10">
                        <h2 onClick={()=>router.push("/")} className="text-mythemes-yellow text-sm">Home</h2>
                        <h2 onClick={()=>router.push("/about")} className="text-mythemes-yellow text-sm">About Us</h2>
                        <h2 onClick={()=>router.push("/products")} className="text-mythemes-yellow text-sm">Product</h2>
                        <h2 onClick={()=>router.push("/teams")} className="text-mythemes-yellow text-sm">Our Teams</h2>
                    </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="block md:hidden">
                            <Button variant="ghost">
                                <Menu className="text-mythemes-yellow"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={()=>router.push("/")}>Home</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>router.push("/about")}>About Us</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>router.push("/products")}>Product</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>router.push("/teams")}>Our Teams</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar