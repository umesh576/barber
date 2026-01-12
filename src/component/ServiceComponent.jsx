import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Classic Haircut",
      description:
        "Timeless styles tailored to your personality and lifestyle. Our barbers bring years of experience to every cut, ensuring you leave looking sharp and confident.",
      icon: "/alll photos/classichaircut.png",
      alt: "Haircut Icon",
    },
    {
      id: 2,
      title: "Clean Fades",
      description:
        "Precision fades that blend perfectly. From low to high, skin to taper — we've mastered the art of the fade with attention to every detail.",
      icon: "/fade.png",
      alt: "Fade Icon",
    },
    {
      id: 3,
      title: "Beard Grooming",
      description:
        "Shape, trim, and style your beard to perfection. Complete with hot towel treatment and premium products for the ultimate grooming experience.",
      icon: "/beard grooming.png",
      alt: "Beard Grooming Icon",
    },
    {
      id: 4,
      title: "Hair Styling",
      description:
        "Bold designs and modern styles. Express yourself with custom styling that makes a statement and turns heads wherever you go.",
      icon: "/hairstyling.png",
      alt: "Hair Styling Icon",
    },
    {
      id: 5,
      title: "Gentleman's Package",
      description:
        "The complete experience: haircut, beard trim, hot towel service, and professional styling. Walk out looking and feeling your absolute best.",
      icon: "/hentlemanspackage.png",
      alt: "Gentleman's Package Icon",
    },
    {
      id: 6,
      title: "Hair Coloring",
      description:
        "Transform your look with professional coloring services. From subtle highlights to bold transformations, we bring your vision to life.",
      icon: "/haircoloring.png",
      alt: "Hair Coloring Icon",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-6 py-2 bg-amber-500/10 rounded-full text-amber-600 font-semibold text-sm tracking-[3px] uppercase mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Grooming is both a craft and a lifestyle. Every service is delivered
            with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Service Icon */}
              <div className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={service.icon}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="inline-flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300">
                <span className="mr-2">Learn more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-amber-50/0 to-amber-50/0 group-hover:from-amber-50/10 group-hover:via-amber-50/5 group-hover:to-amber-50/10 transition-all duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready for Your Transformation?
              </h3>
              <p className="text-gray-600">
                Book your appointment today and experience premium grooming
              </p>
            </div>
            <a
              href="#booknow"
              className="px-8 py-4 bg-linear-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-full hover:from-amber-600 hover:to-yellow-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
