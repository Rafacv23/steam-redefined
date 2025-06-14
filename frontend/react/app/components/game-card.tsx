import { Heart } from "lucide-react"
import Link from "next/link"
import Button from "./ui/button"

export default function GameCard() {
  return (
    <Link href={`/game/1`}>
      <article className="relative w-[280px] h-[400px] rounded-lg overflow-hidden shadow-xl group">
        {/* Background image */}
        <img
          src="https://www.mobygames.com/images/covers/l/435360-super-mario-odyssey-nintendo-switch-front-cover.jpg"
          alt="Super Mario Odyssey"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-between h-full px-4 py-2 text-white">
          {/* Top right rating */}
          <div className="flex justify-between items-start">
            <span className="bg-green-500 text-header rounded-full px-3 py-1 text-sm font-semibold shadow">
              Extremadamente Positivas
            </span>
            <button className="bg-header/20 p-2 rounded-full hover:bg-white/30">
              <Heart size={16} />
            </button>
          </div>

          {/* Bottom content */}
          <div className="mt-auto bg-header/30 rounded-lg p-2">
            <h3 className="text-2xl font-bold">Super Mario Odyssey</h3>
            <p className="text-lg">Nintendo</p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <p className="text-sm line-through text-foreground/80">
                  $49.99
                </p>
                <p className="text-lg font-semibold">$20.99</p>
              </div>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
