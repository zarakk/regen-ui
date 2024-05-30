import Image from "next/image";
import Navbar from "./_components/Navbar";
import Banner from "./_components/Banner";
import ForestSection from "./_components/ForestSection";
import Stats from "./_components/Stats";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <ForestSection />
      <Stats />
    </div>
  );
}
