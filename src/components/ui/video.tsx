import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface VideoProps {
  src: string;
  className?: string;
  poster?: string;
  preload?: "none" | "metadata" | "auto";
}

const Video: React.FC<VideoProps> = ({
  src,
  className,
  poster,
  preload = "metadata",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsLoaded(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={className}>
      {isLoaded ? (
        <video
          className={className}
          muted
          playsInline
          autoPlay
          preload={preload}
          loop
          poster={poster}
        >
          <source src={src} type="video/webm" />
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={poster} alt="Loading video..." className="object-cover" />
      )}
    </div>
  );
};

export default Video;
