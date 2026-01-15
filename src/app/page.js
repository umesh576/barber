import ContactCompnment from "@/component/ContactCompnment";
import Experts from "@/component/Experts";
import Gallery from "@/component/Gallery";
import HeroSection from "@/component/HeroSection";
import MapLocation from "@/component/MapLocation";
import ServicesSection from "@/component/ServiceComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ContactCompnment />
      <MapLocation />
      <Experts />
      <Gallery />
    </div>
  );
}
