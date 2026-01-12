import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactCompnment = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-amber-500/10 rounded-full text-amber-400 font-semibold text-sm tracking-wide mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Visit Us Today
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the Fade X Play difference in Tarakeshwar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Location Card */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:bg-white/8 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-400">Location</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Muscle Mania Fitness Club 2<br />
                Tarakeshwar 44600
                <br />
                Nepal
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:bg-white/8 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-400">Phone</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                <a
                  href="tel:9818162449"
                  className="text-white hover:text-amber-400 transition-colors"
                >
                  981-8162449
                </a>
                <br />
                Call us anytime for inquiries or bookings
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:bg-white/8 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-400">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-amber-400 font-semibold">
                    8 AM - 8 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-amber-400 font-semibold">
                    8 AM - 8 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-amber-400 font-semibold">
                    8 AM - 6 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="relative">
            <div className="relative h-full bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-500 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-amber-500/30 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                {/* Image */}
                <div className="mb-8">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/alll photos/cat.png"
                      alt="Barber Shop Work Example"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 256px, 320px"
                    />
                  </div>
                </div>

                <h3 className="text-4xl font-black text-black mb-6 tracking-tight">
                  BOOK YOUR APPOINTMENT
                </h3>

                <p className="text-gray-800 text-lg mb-8 max-w-md">
                  Ready for your transformation? Book now and experience premium
                  grooming
                </p>

                <div className="space-y-4 w-full max-w-sm">
                  <Link
                    href="#booknow"
                    className="block w-full bg-black text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-gray-900 transform hover:-translate-y-1 transition-all duration-300 shadow-xl text-center"
                  >
                    BOOK NOW
                  </Link>

                  <Link
                    href="tel:9818162449"
                    className="block w-full bg-transparent border-2 border-black text-black py-4 px-8 rounded-full font-bold text-lg hover:bg-black hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    CALL US DIRECTLY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCompnment;
