import { Button } from "@/components/ui/button"
import { asap } from "@/lib/fonts"
import Image from "next/image"

const CompanyOverview = () => {
    return (
        <div>
            <div className="bg-mythemes-black pt-4 pb-4 md:px-28">
                <div className="mx-4 px-4 pt-6 pb-4 border-2 border-mythemes-lightgrey">
                    <h3 className={`text-mythemes-yellow text-center ${asap.className} font-bold`}>Who We Are?</h3>
                    <div className="flex flex-col md:flex-row-reverse pt-4 md:pt-6 gap-10 md:gap-4">
                        <div className="w-full md:w-[60%] flex flex-col gap-8 md:px-8">
                            <p className={`text-white text-justify md:text-left text-[14px] ${asap.className}`}>Mas-Mas Jualan is the place to buy and sell used cellphones. Founded in 2018 by a team who loves tech and cares about the environment, we've grown to serve customers worldwide. Our diverse team works together to make buying and selling phones easy for you. We believe in honesty, helping you save money, and protecting the environment. Whether you're upgrading or selling, CellSwap is here for you. Let's make phone transactions simple and eco-friendly!</p>
                            <div className="mx-auto">
                                <Button className="bg-mythemes-yellow text-black font-bold ">Learn More...</Button>
                            </div>
                        </div>
                        <div className={`relative w-full h-[190px] md:h-[420px]`}>
                            <Image src="/CompanyOverview.jpg" alt="Office Pictures" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyOverview