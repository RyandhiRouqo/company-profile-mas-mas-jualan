import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { asap } from "@/lib/fonts"

const Testimoni = () => {
    return (
        <div>
            <div className="bg-mythemes-black pt-4 pb-4 md:px-28">
                <div className="grid grid-cols-1 gap-4 mx-4 px-4 pt-6 pb-4 border-2 border-mythemes-lightgrey">
                    <div className="flex flex-col gap-4 ">
                        <h3 className={`text-mythemes-yellow text-center ${asap.className} font-bold`}>What Our Customers Say</h3>
                        <p className={`text-white text-center text-[14px] ${asap.className}`}>See what our customers are saying about Mas-Mas Jualan! Read real stories from satisfied buyers and sellers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="grid grid-cols-5 pt-2 pb-2 bg-mythemes-darkgrey rounded-xl">
                            <div className="mx-auto">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="col-span-4 text-xs text-white">
                                <div className="flex flex-col gap-2">
                                    <p>I bought a phone on Mas-Mas Jualan and it was exactly as described! It's in great condition and works perfectly. I'm really happy with my purchase.</p>
                                    <p>Albert Einstein, <span className="text-mythemes-lightgrey">Scientist</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 pt-2 pb-2 bg-mythemes-darkgrey rounded-xl">
                            <div className="mx-auto">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="col-span-4 text-xs text-white">
                                <div className="flex flex-col gap-2">
                                    <p>I bought a phone on Mas-Mas Jualan and it was exactly as described! It's in great condition and works perfectly. I'm really happy with my purchase.</p>
                                    <p>Albert Einstein, <span className="text-mythemes-lightgrey">Scientist</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 pt-2 pb-2 bg-mythemes-darkgrey rounded-xl">
                            <div className="mx-auto">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="col-span-4 text-xs text-white">
                                <div className="flex flex-col gap-2">
                                    <p>I bought a phone on Mas-Mas Jualan and it was exactly as described! It's in great condition and works perfectly. I'm really happy with my purchase.</p>
                                    <p>Albert Einstein, <span className="text-mythemes-lightgrey">Scientist</span></p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimoni