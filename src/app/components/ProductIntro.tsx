import { asap } from "@/lib/fonts"
import { CircleChevronUp, ShoppingBag } from "lucide-react"
import Image from "next/image"
import ProductCard from "./ProductCard"
import { getEntries } from "@/api/getEntries"
import { findAsset } from "../utils/findAsset"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ProductIntro = async () => {
    const blogs = await getEntries();


    return (
        <div>
            <div className="bg-black px-4 pt-6 pb-4 md:px-32">
                <div className="flex flex-col gap-4 pb-6">
                    <h3 className={`text-mythemes-yellow text-center ${asap.className} font-bold`}>Latest Uploads</h3>
                    <p className={`text-white text-center text-[14px] ${asap.className}`}>Check out our newest phones just in! Upgrade to the latest models and save big. Don't miss out on these deals!</p>
                </div>
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 md:w-full pb-4">
                        {
                            blogs.items.slice(0, 3).map((blog, index) => {
                                const assetId = blog.fields.thumbnail.sys.id
                                const assets = blogs.includes.Asset
                                const image = findAsset(assetId, assets)

                                return <ProductCard
                                    key={index}
                                    title={blog.fields.title}
                                    category={blog.fields.category}
                                    description={blog.fields.description}
                                    slug={blog.fields.slug}
                                    imageUrl={`https:${image?.fields.file.url}`}
                                />
                            })}
                    </div>
                </div>
                <div className="block md:hidden">
                    <div className="md:grid flex md:w-full justify-center md:grid-cols-3 gap-3 md:gap-10 pb-4">
                        {
                            blogs.items.slice(0, 1).map((blog, index) => {
                                const assetId = blog.fields.thumbnail.sys.id
                                const assets = blogs.includes.Asset
                                const image = findAsset(assetId, assets)

                                return <ProductCard
                                    key={index}
                                    title={blog.fields.title}
                                    category={blog.fields.category}
                                    description={blog.fields.description}
                                    slug={blog.fields.slug}
                                    imageUrl={`https:${image?.fields.file.url}`}
                                />
                            })}
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <Link href="/products">
                            <Button className="bg-mythemes-yellow text-black font-bold">See More Items..</Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductIntro