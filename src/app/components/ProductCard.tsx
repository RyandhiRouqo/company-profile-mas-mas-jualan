import { CircleChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProductProps {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  slug: string
}

const ProductCard: FC<CardProductProps> = ({ category, description, imageUrl, title, slug }) => {
  return (
    <Link href={`/${slug}`}className="relative min-w-[300px] max-w-[500px] w-full bg-mythemes-darkgrey pt-4 px-4">
      <div>
        <div className="relative w-full aspect-square">
          <Image
            src="/iphone.jpg"
            alt={imageUrl}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="py-4">
          <h2 className="text-white text-center font-bold text-lg">
            {title}
          </h2>
          <h3 className="text-mythemes-lightgrey text-center font-bold text-sm">
            {category}
          </h3>
          <h3 className="text-mythemes-yellow text-center font-bold text-sm">
            {description}
          </h3>
        </div>
        <div className="absolute bottom-4 right-4">
          <CircleChevronUp className="w-8 h-8 text-mythemes-yellow" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
