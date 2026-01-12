const VideoComponent = ({ video }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <video autoPlay muted loop playsInline className="rounded-xl w-full">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
