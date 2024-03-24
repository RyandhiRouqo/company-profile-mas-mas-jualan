import Image from "next/image";
import Hero from "./components/Hero";
import CompanyOverview from "./components/CompanyOverview";
import ProductIntro from "./components/ProductIntro";
import Testimoni from "./components/Testimoni";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductIntro />
      <Testimoni />
    </>
  );
}
