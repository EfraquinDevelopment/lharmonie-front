import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface VideoProps {
  src: string;
  className?: string;
  poster: string;
}

const Video: React.FC<VideoProps> = ({ src, className, poster }) => {
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play().catch(() => {
        setShowImage(true);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      muted={!showImage}
      playsInline={!showImage}
      autoPlay={!showImage}
      controls={false}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
