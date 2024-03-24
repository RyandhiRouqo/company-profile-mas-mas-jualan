import { Button } from "@/components/ui/button"
import { asap } from "@/lib/fonts"
import Image from "next/image"
import Link from "next/link"



const Hero = () => {
    return (
        <div>
            <div className="mx-auto bg-black pt-5 px-4 md:px-32">
                <div>
                    <div className="md:w-[80%]">
                        <h1 className={`text-white text-[36px] md:text-6xl ${asap.className} font-semibold`}>Your Marketplace for Quality Used <span className="text-mythemes-yellow">Smartphones</span></h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 pt-3 md:py-10 gap-10 md:gap-20">
                        <div>
                            <p className={`text-white md:text-m pb-8 md:pb-10 text-[14px] md:text-[18px] ${asap.className}`}>At Mas-Mas Jualan, we're here to help you find great phones at great prices while saving the environment. Join us in making phone upgrades easy, affordable, and green!</p>
                            <Link href="/about">
                                <Button className="bg-mythemes-yellow text-black font-bold">Learn More...</Button>
                            </Link>
                        </div>
                        <div className={`relative w-full aspect-[10/6] ${asap.className} md:col-span-2`}>
                            <Image src="/hero.jpg" alt="Hero Pictures" fill className="object-cover" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero