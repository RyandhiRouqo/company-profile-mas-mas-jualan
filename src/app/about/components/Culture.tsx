import { asap } from "@/lib/fonts"
import Image from "next/image"

const Culture = () => {
    return (
        <div>
            <div className="bg-mythemes-black pt-4 px-4 pb-4 md:px-28">
                <h3 className={`text-mythemes-yellow text-center ${asap.className} font-bold md:text-xl`}>Our Culture</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 pt-3 gap-10">
                    <div>
                        <p className={`text-white text-justify md:text-left text-[14px] ${asap.className}`}>At Mas-Mas Jualan, we foster a culture of transparency, integrity, and sustainability. We believe in the power of technology to improve lives, and we're committed to making a positive impact on the environment. Our team is encouraged to think creatively, challenge the status quo, and always put the customer first. We prioritize diversity and inclusion, valuing the unique perspectives and contributions of each team member.</p>
                    </div>
                    <div className={`relative w-full aspect-[10/6] ${asap.className} md:col-span-2`}>
                        <Image src="/culture.jpg" alt="Hero Pictures" fill className="object-cover" loading="lazy"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Culture