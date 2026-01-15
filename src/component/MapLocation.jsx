import React from "react";

const MapLocation = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14122.83647378532!2d85.2826957871582!3d27.757116600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1f0018054707%3A0x685a06a0c18f2af6!2sFade%20X%20Play!5e0!3m2!1sen!2snp!4v1768461102381!5m2!1sen!2snp"
          width="600"
          height="550"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MapLocation;
