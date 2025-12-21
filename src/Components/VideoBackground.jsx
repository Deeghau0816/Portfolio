import React from "react";

export default function VideoBackground() {
  return (
    <>
      <video
        className="fixed inset-0 h-full w-full object-cover -z-20"
        src="/videos/BackgroundVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="fixed inset-0 bg-black/55 -z-10" />
    </>
  );
}
