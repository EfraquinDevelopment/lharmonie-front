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

  return showImage ? (
    <Image src={src} alt={src} className={className} layout="fill" />
  ) : (
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
