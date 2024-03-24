import { asap } from "@/lib/fonts"
import Image from "next/image"

const History = () => {
  return (
    <div>
      <div className="bg-mythemes-black pt-4 pb-4 px-4 md:px-28">
        <h3 className={`text-mythemes-yellow text-center ${asap.className} font-bold md:text-xl`}>Our History</h3>
        <div className="flex flex-col md:flex-row-reverse pt-4 md:pt-6 gap-10 md:gap-4">
          <div className="w-full md:w-[60%] flex flex-col gap-8 md:px-8">
            <p className={`text-white text-justify md:text-left text-[14px] ${asap.className}`}>Founded in 2018 by tech enthusiasts with a passion for sustainability, Mas-Mas Jualan was born out of a desire to create a marketplace that addresses the growing demand for affordable smartphones while reducing electronic waste. Since its inception, Mas-Mas Jualan has grown rapidly, expanding its reach to serve customers across the globe. Our commitment to quality, affordability, and environmental responsibility has made us a trusted name in the pre-owned cellphone market.</p>
          </div>
          <div className={`relative w-full aspect-[10/6]`}>
            <Image src="/history.jpg" alt="Office Pictures" fill className="object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default History