"use client"

import { useState } from "react"
import { cn } from "../../lib/utils"
import { BigGameCard, Game } from "@/components/game-card"

interface CarouselProps {
  games: Game[]
}

export default function Carousel({ games }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? games.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === games.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {games.map((game, i) => (
          <div
            key={game.id}
            className={cn(
              "absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out",
              i === current ? "opacity-100 z-20" : "opacity-0 z-10"
            )}
          >
            <BigGameCard game={game} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {games.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-3 h-3 rounded-full",
              i === current ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  )
}
