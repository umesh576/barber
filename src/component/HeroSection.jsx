"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative  h-screen flex items-center justify-center overflow-hidden "
    >
      <div className="absolute inset-0 animate-[zoomIn_20s_ease-in-out_infinite_alternate]">
        <Image
          src="https://res.cloudinary.com/dudpopk4h/image/upload/v1768184125/background_kkt04f.png"
          alt="Fade X Play Barber Shop Interior"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/50" />
      </div>

      <div className="absolute inset-0 bg-radial-gradient " />

      <div className="relative z-10 text-center text-white max-w-4xl px-6 animate-[fadeInUp_1s_ease-out] mt-7">
        <p className="text-yellow-400 tracking-[3px] uppercase font-semibold mb-6 animate-[fadeInUp_1s_ease-out_0.2s_both] ">
          Premium Men&apos;s Grooming
        </p>

        <h1 className="text-2xl md:text-5xl lg:text-7xl font-black uppercase tracking-wider  mb-4 drop-shadow-xl animate-[fadeInUp_1s_ease-out_0.4s_both] leading-snug md:leading-tight ">
          Where Style <br /> Meets Precision
        </h1>

        <p className="text-1xl md:text-xl  text-gray-100 md:text-gray-400 mb-5 font-light animate-[fadeInUp_1s_ease-out_0.6s_both]">
          More than a salon — it&apos;s an experience crafted by masters
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-9 mb-8 animate-[fadeInUp_1s_ease-out_0.8s_both]">
          <div className="text-center">
            <span className="block text-2xl font-black text-yellow-400 drop-shadow-glow">
              5.0★
            </span>
            <span className="text-sm text-gray-100 md:text-gray-400 uppercase tracking-wider">
              Google Rating
            </span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-black text-yellow-400 drop-shadow-glow">
              80+
            </span>
            <span className="text-sm text-gray-100 md:text-gray-400 uppercase tracking-wider">
              Happy Clients
            </span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-black text-yellow-400 drop-shadow-glow">
              10+
            </span>
            <span className="text-sm text-gray-100 md:text-gray-400 uppercase tracking-wider">
              Years Experience
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 animate-[fadeInUp_1s_ease-out_1s_both]">
          <Link
            href="/contact"
            className="px-7 md:px-10 py-3 md:py-5 rounded-full bg-yellow-400 text-black font-bold uppercase tracking-wider shadow-xl hover:-translate-y-1 hover:shadow-yellow-400/50 transition"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/services"
            className="px-7 md:px-10 py-3 md:py-5 rounded-full border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:-translate-y-1 transition"
          >
            View Services
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-6 py-8">
          <h1 className="text-3xl  md:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h1>
          <div className="flex space-x-8">
            <a
              href="https://www.instagram.com/fade_x_play/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-950 rounded-2xl hover:animate-bounce shadow-lg hover:shadow-xl"
            >
              <FaSquareInstagram className="w-8 h-8 text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@fade.x.play"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-950 rounded-2xl hover:animate-bounce shadow-lg hover:shadow-xl"
            >
              <AiFillTikTok className="w-8 h-8 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
