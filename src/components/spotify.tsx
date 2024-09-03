import { type HTMLAttributes } from "react";

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any;

  link: string;
  wide?: boolean;
  width?: number | string;
  height?: number | string;
  allow?: string;
}

export const Spotify = ({
  link,
  style = {},
  wide = false,
  width = wide ? "100%" : 300,
  height = wide ? 80 : 380,
  allow = "encrypted-media",
  ...props
}: SpotifyProps) => {
  const url = new URL(link);
  url.pathname = url.pathname.replace(/\/intl-\w+\//, "/");
  return (
    <div
      className="-md:rounded-b-lg md:rounded-l-none md:rounded-r-lg"
      style={{
        background: "linear-gradient(to bottom, #8E723C 50%, #806636 50%)",
      }}
    >
      <iframe
        title="Spotify Web Player"
        src={`https://open.spotify.com/embed${url.pathname}`}
        width={width}
        height={height}
        allow={allow}
        style={{
          ...style,
        }}
        {...props}
      />
    </div>
  );
};
