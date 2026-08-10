"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PackageSearch } from "lucide-react";

interface ProductCarouselProps {
  images: string[];
  alt: string;
}

export function ProductCarousel({ images, alt }: ProductCarouselProps) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-xl bg-light">
        <PackageSearch className="h-16 w-16 text-industrial/30" aria-hidden="true" />
        <span className="sr-only">Photo à venir : {alt}</span>
      </div>
    );
  }

  function showPrev() {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNext() {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-xl bg-light">
        <Image
          src={images[index]}
          alt={`${alt} — photo ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrev}
              aria-label="Photo précédente"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-industrial shadow hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Photo suivante"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-industrial shadow hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setIndex(imageIndex)}
              aria-label={`Voir la photo ${imageIndex + 1}`}
              aria-current={imageIndex === index}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-md border-2 ${
                imageIndex === index ? "border-technical" : "border-transparent"
              }`}
            >
              <Image src={image} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
