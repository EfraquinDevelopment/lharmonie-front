import React from "react";

interface VideoProps {
  src: string;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ src, className }) => {
  return (
    <video className={className} muted playsInline autoPlay preload="none" loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
