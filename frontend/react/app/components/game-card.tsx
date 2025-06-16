import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Button from "./ui/button"

export function GameCard() {
  return (
    <Link href={`/game/1`}>
      <article className="relative w-[280px] h-[400px] rounded-lg overflow-hidden shadow-xl group">
        <img
          src="https://www.mobygames.com/images/covers/l/435360-super-mario-odyssey-nintendo-switch-front-cover.jpg"
          alt="Super Mario Odyssey"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="relative z-10 flex flex-col justify-between h-full p-2 text-foreground">
          <div className="flex justify-between items-center">
            <span className="bg-green-500 text-header rounded-lg text-sm p-2 font-semibold shadow">
              Extremadamente Positivas
            </span>
            <Button size="default" variant="outline">
              <Heart size={16} />
            </Button>
          </div>
          <div className="mt-auto bg-background/50 rounded-lg p-2">
            <h3 className="text-2xl font-bold">Super Mario Odyssey</h3>
            <p className="text-lg text-foreground-secondary">Nintendo</p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <p className="text-sm line-through text-foreground-secondary">
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

export function DetailedGameCard() {
  //TODO if the have has a discount, show it, if not change this

  return (
    <Link href={`/game/1`}>
      <article className="flex gap-2 rounded-lg shadow-xl bg-card p-4">
        <img
          src="https://www.mobygames.com/images/covers/l/435360-super-mario-odyssey-nintendo-switch-front-cover.jpg"
          alt="Super Mario Odyssey"
          width={150}
          className="rounded-lg"
        />
        <div className="flex flex-col justify-between p-2 text-foreground w-full">
          <div className="flex justify-between items-center">
            <span className="bg-green-500 text-header rounded-lg text-sm p-2 font-semibold shadow">
              Extremadamente Positivas
            </span>
            <Button size="default" variant="outline">
              <Heart size={16} />
            </Button>
          </div>
          <div className="mt-2 rounded-lg p-2">
            <h3 className="text-2xl font-bold">Super Mario Odyssey</h3>
            <p className="text-lg text-foreground-secondary">Nintendo</p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <span className="bg-accent text-header p-2 rounded-lg font-bold">
                  -35%
                </span>
                <div className="flex flex-col items-start pl-2">
                  <p className="text-sm line-through text-foreground-secondary">
                    $49.99
                  </p>
                  <p className="text-lg font-semibold">$20.99</p>
                </div>
              </div>
              <Button>
                <ShoppingCart size={16} /> Add to cart
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export function BigGameCard() {
  return (
    <Link href={`/game/1`}>
      <article className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl group p-4">
        <img
          src="https://images4.alphacoders.com/960/thumb-1920-960885.jpg"
          alt="Super Mario Odyssey"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="relative z-10 flex flex-col justify-between h-full p-2 text-foreground">
          <div className="flex justify-between items-center">
            <span className="bg-green-500 text-header rounded-lg text-sm p-2 font-semibold shadow">
              Extremadamente Positivas
            </span>
            <Button size="default" variant="outline">
              <Heart size={16} />
            </Button>
          </div>
          <div className="mt-auto bg-background/50 rounded-lg p-2">
            <h3 className="text-2xl font-bold">Super Mario Odyssey</h3>
            <p className="text-lg text-foreground-secondary">Nintendo</p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <p className="text-sm line-through text-foreground-secondary">
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
