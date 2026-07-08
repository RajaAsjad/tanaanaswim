"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc,
  className,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setError(true);
    }
  };

  if (error) {
    return (
      <div
        className={`bg-sand-dark flex items-center justify-center ${className || ""}`}
        style={props.fill ? { position: "absolute", inset: 0 } : undefined}
      >
        <span className="text-xs text-charcoal-light px-4 text-center">Image unavailable</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      unoptimized={
        typeof currentSrc === "string" &&
        (currentSrc.includes("cdn.shopify.com") ||
          currentSrc.includes("tanaanaswim.com"))
      }
    />
  );
}
