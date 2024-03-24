import { result } from "@/types/result.types";
import Image from "next/image";
import { GetRandomUser } from "./GetRandomUser";


const MemberList = async () => {
    const { results } = await GetRandomUser();
    return (
        <div>
            <div className='bg-black px-4 md:px-32'>
                <div className='md:grid flex flex-col items-center justify-center md:grid-cols-4 gap-6'>
                    {results.map((result: result) => (
                        <div className="relative min-w-[100px] max-w-[360px] w-full aspect-[15/17]">
                            <Image
                                src={result.picture.large}
                                alt="Phone Picture"
                                fill
                                className="object-cover"
                            />
                            <div className='flex flex-col gap-1 bg-black/50 backdrop-blur absolute bottom-0 lift-0 px-4 py-2 w-full'>
                                <h3 className="text-white text-left font-bold text line-clamp-1">
                                    {result.name.first}{" "}{result.name.last}
                                </h3>
                                <h3 className="text-white text-left line-clamp-1">
                                    {result.email}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MemberList