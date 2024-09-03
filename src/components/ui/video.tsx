import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface VideoProps {
  src: string;
  className?: string;
  poster: string;
}

const Video: React.FC<VideoProps> = ({ src, className, poster }) => {
  const [showImage, setShowImage] = useState(false);
  const [isEffectDone, setIsEffectDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement
        .play()
        .catch(() => {
          videoElement.controls = false;
        })
        .finally(() => {
          setIsEffectDone(true);
        });
    } else {
      setIsEffectDone(true);
    }
  }, []);

  if (!isEffectDone) {
    return null;
  }

  return (
    <video ref={videoRef} className={className} muted playsInline autoPlay loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
