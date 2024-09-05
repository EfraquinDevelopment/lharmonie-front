import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface VideoProps {
  src: string;
  className?: string;
  poster: string;
}

const Video: React.FC<VideoProps> = ({ src, className }) => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [disabledAutoPlay, setDisabledAutoplay] = useState(false);

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   if (videoElement) {
  //     videoElement.play().catch(() => {
  //       setDisabledAutoplay(true);
  //     });
  //   }
  // }, []);

  return (
    <video className={className} muted playsInline autoPlay loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
