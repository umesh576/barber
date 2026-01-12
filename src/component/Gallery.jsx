import React from "react";

const Gallery = () => {
  // Video paths (inside public/video folder)
  const videos = [
    "/video/video1.mp4",
    "/video/video2.mp4",
    "/video/video3.mp4",
    "/video/video4.mp4",
    "/video/video5.mp4",
    "/video/video6.mp4",
  ];

  return (
    <div className="py-16 px-6 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>
      <div className="text-center mb-16">
        <div className="inline-block text-yellow-400 font-semibold uppercase tracking-wider text-sm mb-2">
          Portfolio
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-4">Our Work</h2>
        <p className="text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
          See the quality and precision that defines Fade X Play
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              style={{ height: "22rem" }}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
