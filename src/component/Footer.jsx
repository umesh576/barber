import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 border-t border-white/10 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="text-amber-400 text-3xl font-black tracking-wider mb-4">
            FADE <span className="text-white">✕</span> PLAY
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Premium grooming experience in the heart of Tarakeshwar
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/fade_x_play/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500/20 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <div className="text-white">
                <FaInstagramSquare />
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@fade.x.play"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500/20 hover:scale-110 transition-all duration-300"
              aria-label="TikTok"
            >
              <div className="text-white">
                <AiFillTikTok />
              </div>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} Fade X Play Barbershop. All rights
            reserved. By Umesh
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
