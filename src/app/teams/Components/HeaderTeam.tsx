import { asap } from "@/lib/fonts"

const HeaderTeam = () => {
    return (
        <div>
            <div className="bg-black px-4 md:px-32">
                <div className="flex flex-col items-center py-10">
                    <h1 className={`text-white text-[24px] md:text-[36px] ${asap.className} font-semibold`}>Our Community</h1>
                    <p className={`text-white text-center text-[14px] ${asap.className}`}>Join the Mas-Mas Jualan community! Connect with fellow phone enthusiasts, share tips, and stay updated on the latest deals. Together, let's make a positive impact on the environment!</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderTeam