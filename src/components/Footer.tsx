import Image from "next/image"

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col mx-auto items-center bg-black pb-10">
                <Image src="/Logo.PNG" alt="Logo" width={120} height={120} />
                <div className="flex flex-col md:flex-row gap-4 text-center font-extrabold">
                    <p className="text-mythemes-lightgrey">About Us</p>
                    <p className="text-mythemes-lightgrey">Our Teams</p>
                    <p className="text-mythemes-lightgrey">Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer