import React from "react";
import { Phone, Mail, X, CalendarCheck } from "lucide-react";

const BookAppointment = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-linear-to-br from-amber-400 via-amber-500 to-yellow-500 rounded-3xl shadow-2xl max-w-md w-full p-8 relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-black rounded-full p-2 transition"
        >
          <X />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-black/10 p-4 rounded-full">
            <CalendarCheck className="text-black w-10 h-10" />
          </div>
        </div>

        <h1 className="text-3xl font-black text-black mb-2">
          Book Appointment
        </h1>

        <p className="text-gray-800 mb-6">
          Contact us now to confirm your booking
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-left">
          <a
            href="tel:9849748294"
            className="flex items-center gap-3 bg-black/10 hover:bg-black/20 p-4 rounded-xl transition"
          >
            <Phone className="text-black" />
            <span className="font-bold text-black">+977 9849748294</span>
          </a>

          <a
            href="mailto:uj19343@gmail.com"
            className="flex items-center gap-3 bg-black/10 hover:bg-black/20 p-4 rounded-xl transition"
          >
            <Mail className="text-black" />
            <span className="font-bold text-black">uj19343@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
