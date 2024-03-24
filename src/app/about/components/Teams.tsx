import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { asap } from "@/lib/fonts"

const Teams = () => {
    return (
        <div>
            <div className="bg-mythemes-black pt-4 pb-4 md:px-28">
                <h3 className={`text-mythemes-yellow text-center ${asap.className} font-bold pb-4 md:text-xl`}>Our Leadership</h3>
                <div className="px-4 pt-4 pb-4 border-2 border-mythemes-lightgrey">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-4">
                        <div className={``}>
                            <Avatar className="h-[200px] w-[200px] ">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-col gap-8 md:px-8">
                            <p className={`text-white text-justify md:text-left text-[14px] ${asap.className}`}>"Mas-Mas Jualan's success is driven by our dedicated and diverse team of professionals. From tech experts to customer support specialists, each member of our team is committed to providing the best possible experience for our users. We have a culture of innovation, collaboration, and continuous improvement, ensuring that CellSwap remains at the forefront of the industry."</p>
                            <p className=" text-white font-bold"> Realizal, <span className="text-mythemes-lightgrey font-bold">CEO & Founder</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams