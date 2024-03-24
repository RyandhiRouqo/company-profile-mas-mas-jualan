import { getEntries } from '@/api/getEntries';
import ProductCard from '@/app/components/ProductCard'
import { findAsset } from '@/app/utils/findAsset';
import React from 'react'

const ProductList = async () => {
    const blogs = await getEntries();

    return (
        <div>
            <div className='bg-black px-4 md:px-24'>
                <div className='flex flex-col items-center justify-center gap-6 md:grid md:gap-10 md:grid-cols-3'>
                    {
                        blogs.items.map((blog, index) => {
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
        </div>
    )
}

export default ProductList