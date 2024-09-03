import React, { useEffect, useRef } from "react";

interface VideoProps {
  src: string;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play().catch(() => {
        if (videoElement) videoElement.controls = true;
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      preload="true"
      muted
      playsInline
      autoPlay
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
