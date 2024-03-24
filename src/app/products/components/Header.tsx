import { asap } from "@/lib/fonts"

const Header = () => {
  return (
    <div>
      <div className="bg-black px-4 py-8 md:32">
        <h1 className={`text-white text-center text-[24px] ${asap.className} font-bold text-xl`}>Today's picks</h1>
      </div>
    </div>
  )
}

export default Header