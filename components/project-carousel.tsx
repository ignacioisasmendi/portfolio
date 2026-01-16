"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ImageDescription } from "@/lib/projects-data"

interface ProjectCarouselProps {
  images: ImageDescription[]
  title: string
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on("select", onSelect)
    emblaMainApi.on("reInit", onSelect)
  }, [emblaMainApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev()
  }, [emblaMainApi])

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext()
  }, [emblaMainApi])

  const canScrollPrev = emblaMainApi?.canScrollPrev() ?? false
  const canScrollNext = emblaMainApi?.canScrollNext() ?? false

  return (
    <div className="space-y-4">
      {/* Main Carousel */}
      <div className="relative group">
        <div className="overflow-hidden rounded-lg border border-neutral-200 shadow-md transition-shadow duration-300 hover:shadow-lg" ref={emblaMainRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full object-cover"
                />

                {image.description && image.description && index === selectedIndex && (
                  <div className=" bottom-0 left-0 right-0 px-4 py-3 bg-white/95 border-t border-neutral-200">
                    <p className="text-md text-neutral-600 leading-relaxed">{image.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#E5E7EB] text-[#1C1C1C] shadow-lg transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hover:bg-white hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#E5E7EB] text-[#1C1C1C] shadow-lg transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hover:bg-white hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex gap-3 p-1">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onThumbClick(index)}
                className={`flex-[0_0_80px] min-w-0 relative rounded-md overflow-hidden border-2 transition-all ${
                  index === selectedIndex
                    ? "border-[#146C43] scale-105 shadow-md"
                    : "border-[#E5E7EB] opacity-60 hover:opacity-100 hover:border-[#146C43]/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="w-full h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
