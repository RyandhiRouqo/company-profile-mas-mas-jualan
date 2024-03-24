
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
    return (
        <div>
            <div className="flex flex-col mx-auto items-center bg-black pb-10">
                <Image src="/Logo.PNG" alt="Logo" width={120} height={120} />
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center font-extrabold">
                    <p className="text-mythemes-lightgrey cursor-pointer"><Link href="/about">Who We Are</Link></p>
                    <p className="text-mythemes-lightgrey cursor-pointer"><Link href="/products">Today's picks</Link></p>
                    <p className="text-mythemes-lightgrey cursor-pointer"><Link href="/teams">Our Community</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer