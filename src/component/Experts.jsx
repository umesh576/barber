import React from "react";
import Image from "next/image";
import { Scissors, Sparkles, Award } from "lucide-react";

const Experts = () => {
  const barbers = [
    {
      id: 1,
      name: "Bipin Aryal",
      role: "Co-Founder & Master Barber",
      description:
        "With over a decade of experience in the grooming industry, Bipin brings unmatched artistry and precision to every cut. He specializes in modern fades and classic styles that never go out of fashion.",
      image: "/alll photos/cat.png",
      specialties: ["Modern Fades", "Classic Styles", "Precision Cutting"],
      experience: "10+ years",
    },
    {
      id: 2,
      name: "Bimal Singh Karki",
      role: "Co-Founder & Master Barber",
      description:
        "A true perfectionist who treats every client like family. Bimal is known for his transformative styles and meticulous attention to detail that consistently sets new trends in the community.",
      image: "/alll photos/cat.png",
      specialties: ["Transformative Styles", "Trend Setting", "Detail Work"],
      experience: "8+ years",
    },
  ];

  return (
    <section
      id="barbers"
      className="py-16 md:py-24 bg-linear-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-6 py-2 bg-amber-500/10 rounded-full text-amber-400 font-semibold text-sm tracking-[3px] uppercase mb-6">
            Meet the Team
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-linear-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Master Barbers
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Founded by artists who believe grooming is an art form
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="group bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-900/20 transition-all duration-500 hover:-translate-y-2 border border-amber-500/10 hover:border-amber-500/30"
            >
              {/* Barber Image */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <Image
                  src={barber.image}
                  alt={`${barber.name} - Master Barber`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={barber.id === 1}
                />

                {/* Experience Badge */}
                <div className="absolute top-6 right-6 z-20 bg-linear-to-r from-amber-500 to-yellow-500 text-black font-bold py-2 px-4 rounded-full text-sm shadow-lg">
                  {barber.experience}
                </div>
              </div>

              {/* Barber Info */}
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {barber.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-amber-400 font-semibold mb-6">
                      <Award className="w-4 h-4" />
                      <span>{barber.role}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {barber.description}
                </p>

                {/* Specialties */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Scissors className="w-5 h-5" />
                    <span className="font-medium">Specializes in:</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {barber.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-amber-300 text-sm border border-amber-500/20"
                      >
                        <Sparkles className="w-3 h-3" />
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <div className="mt-8 pt-8 border-t border-gray-700/50">
                  <a
                    href="#booknow"
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-linear-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/25"
                  >
                    <span>Book with {barber.name.split(" ")[0]}</span>
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-linear-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-amber-500/10">
            <div className="text-5xl font-black text-amber-400 mb-3">18+</div>
            <div className="text-gray-300 font-semibold">Years Combined</div>
            <div className="text-gray-400 text-sm mt-2">
              Professional Experience
            </div>
          </div>
          <div className="text-center p-8 bg-linear-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-amber-500/10">
            <div className="text-5xl font-black text-amber-400 mb-3">5000+</div>
            <div className="text-gray-300 font-semibold">Happy Clients</div>
            <div className="text-gray-400 text-sm mt-2">
              Satisfaction Guaranteed
            </div>
          </div>
          <div className="text-center p-8 bg-linear-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-amber-500/10">
            <div className="text-5xl font-black text-amber-400 mb-3">100+</div>
            <div className="text-gray-300 font-semibold">Styles Mastered</div>
            <div className="text-gray-400 text-sm mt-2">
              From Classic to Modern
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
