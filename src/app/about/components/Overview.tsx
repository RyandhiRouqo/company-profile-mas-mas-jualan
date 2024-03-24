import { asap } from "@/lib/fonts"
import Image from "next/image"

const Overview = () => {
  return (
    <div>
      <div className="mx-auto bg-black pt-5 pb-4 px-4 md:px-32">
        <div>
          <div className="flex flex-col items-center">
            <p className="text-mythemes-lightgrey font-bold text-sm">Who We Are</p>
            <h1 className={`text-white text-[24px] md:text-[36px] ${asap.className} font-semibold`}>About Us</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-3 gap-10">
            <div>
              <p className={`text-white text-justify text-[14px] ${asap.className} md:text-left`}>Mas-Mas Jualan is a leading online marketplace dedicated to connecting buyers and sellers of high-quality, pre-owned cellphones. Our platform offers a convenient and secure way to trade, upgrade, and save on the latest smartphone models. With a focus on sustainability and customer satisfaction, Mas-Mas Jualan is revolutionizing the way people buy and sell used phones.</p>
            </div>
            <div className={`relative w-full aspect-[10/6] ${asap.className} md:col-span-2`}>
              <Image src="/meeting.jpg" alt="Hero Pictures" fill className="object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview