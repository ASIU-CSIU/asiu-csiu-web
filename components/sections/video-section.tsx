"use client";
import { useEffect, useRef } from "react";

interface VideoSectionProps {
  videoId: string;
  loop?: boolean;
}

export default function VideoSection({ videoId, loop = true }: VideoSectionProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        } else {
          iframe.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&loop=${loop ? 1 : 0}&playlist=${loop ? videoId : ""}&mute=1&enablejsapi=1`;

  return (
    <div className="w-full aspect-video">
        <iframe
        ref={iframeRef}
        className="w-full h-full"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        />
    </div>
  );
}
