import { getEntriBySlug } from "@/api/getEntryBySlug"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { findAsset } from "../utils/findAsset"
import { asap } from "@/lib/fonts"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogDetailProps {
    params: {
        slug: string
    }
}

const BlogDetail: React.FC<BlogDetailProps> = async ({ params }) => {
    const blog = await getEntriBySlug(params.slug)

    if (!blog.items.length) {
        notFound();
    }

    const assetId = blog.items[0].fields.thumbnail.sys.id
    const assets = blog.includes.Asset
    const image = findAsset(assetId, assets)

    const RICHTEXT_OPTIONS: Options = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => {
                return <h2 className="my-2 text-[14px] font-bold ">{children}</h2>
            },
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p className="text-[14px] font-light ">{children}</p>
            },
        }
    }



    return (

        <div className="bg-mythemes-black pt-4 pb-4 px-4 md:px-28">
            <div className="flex flex-col-reverse md:flex-row-reverse pt-4 md:pt-6 gap-10 md:gap-4">
                <div className=" w-full flex flex-col gap-2 md:px-8">
                    <p className={`text-mythemes-yellow text-center md:text-left ${asap.className} font-bold md:text-xl`}>{blog.items[0].fields.title}</p>
                    <p className={`text-white text-center md:text-left text-[14px] ${asap.className}`}>{blog.items[0].fields.category}</p>
                    <p className={`text-white text-center font-extrabold md:text-left text-[14px] ${asap.className}`}>{blog.items[0].fields.description}</p>
                    <div className={`text-white text-justify md:text-left text-[14px] ${asap.className}`}>{documentToReactComponents(blog.items[0].fields.content, RICHTEXT_OPTIONS)}</div>

                    <Link href="http://wa.me/6281226087664" target="_blank" className="w-full">
                    <Button className="bg-mythemes-yellow text-black font-bold w-full">Checkout</Button>
                    </Link>


                    <Link href="/products" className="w-full">
                        <Button className="bg-mythemes-darkgrey text-white font-bold w-full">Back</Button>
                    </Link>


                </div>
                <div className={`relative md:w-[60%] w-full aspect-square`}>
                    <Image src={`https:${image?.fields.file.url}`} alt="thumnail" fill className="object-cover" loading="lazy" />
                </div>
            </div>
        </div>

    )
}

export default BlogDetail
