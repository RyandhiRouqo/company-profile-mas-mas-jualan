import { asap } from "@/lib/fonts"
import { CircleChevronUp, ShoppingBag } from "lucide-react"
import Image from "next/image"

const ProductIntro = () => {
    return (
        <div>
            <div className="bg-black px-4 pt-6 pb-4 md:px-32">
                <div className="flex flex-col gap-4 pb-6">
                    <h3 className={`text-mythemes-yellow text-center ${asap.className} font-bold`}>Latest Uploads</h3>
                    <p className={`text-white text-center text-[14px] ${asap.className}`}>Check out our newest phones just in! Upgrade to the latest models and save big. Don't miss out on these deals!</p>
                </div>
                <div className="md:justify-center flex flex-col md:flex-row gap-3 md:gap-10 md:w-full">
                    <div className="relative min-w-[300px] max-w-[360px] bg-mythemes-darkgrey pt-4 px-4 ">
                        <div className="relative w-full aspect-square">
                            <Image src="/iphone.jpg" alt="Phone Picture" fill className="object-cover" />
                        </div>
                        <div className="py-4">
                            <h2 className="text-white text-center font-bold text-lg">Iphone 15 Pro Max</h2>
                            <h3 className="text-mythemes-lightgrey text-center font-bold text-sm">512 GB - Black</h3>
                            <h3 className="text-mythemes-yellow text-center font-bold text-sm">Very Good Condition</h3>
                        </div>
                        <div className="absolute bottom-4 right-4">

                            <CircleChevronUp className="w-8 h-8 text-mythemes-yellow" />
                        </div>
                    </div>

                    <div className="relative min-w-[300px] max-w-[360px] bg-mythemes-darkgrey pt-4 px-4 ">
                        <div className="relative w-full aspect-square">
                            <Image src="/iphone.jpg" alt="Phone Picture" fill className="object-cover" />
                        </div>
                        <div className="py-4">
                            <h2 className="text-white text-center font-bold text-lg">Iphone 15 Pro Max</h2>
                            <h3 className="text-mythemes-lightgrey text-center font-bold text-sm">512 GB - Black</h3>
                            <h3 className="text-mythemes-yellow text-center font-bold text-sm">Very Good Condition</h3>
                        </div>
                        <div className="absolute bottom-4 right-4">

                            <CircleChevronUp className="w-8 h-8 text-mythemes-yellow" />
                        </div>
                    </div>

                    <div className="relative min-w-[300px] max-w-[360px] bg-mythemes-darkgrey pt-4 px-4 ">
                        <div className="relative w-full aspect-square">
                            <Image src="/iphone.jpg" alt="Phone Picture" fill className="object-cover" />
                        </div>
                        <div className="py-4">
                            <h2 className="text-white text-center font-bold text-lg">Iphone 15 Pro Max</h2>
                            <h3 className="text-mythemes-lightgrey text-center font-bold text-sm">512 GB - Black</h3>
                            <h3 className="text-mythemes-yellow text-center font-bold text-sm">Very Good Condition</h3>
                        </div>
                        <div className="absolute bottom-4 right-4">

                            <CircleChevronUp className="w-8 h-8 text-mythemes-yellow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductIntro