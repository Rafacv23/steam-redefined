import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Button from "./ui/button"
import { calculateGameRating, calculatePrice } from "../../lib/utils"

type Review = {
  author: string
  date: string
  rating: number
  hours: number
  comment: string
}

type LinkType = {
  name: string
  url: string
}

type Dlc = {
  name: string
  content?: string[]
}

type SystemRequirement = {
  name: string
  value: string
}

export type Game = {
  id: number
  name: string
  cover: string
  poster: string
  trailer: string
  discount: number
  developer: string
  publisher: string
  important: boolean
  released: string
  tags: string[]
  features: string[]
  languages: string[]
  dlcs: Dlc[]
  rating: number
  total_reviews: number
  steam_deck: string
  system_requiremens: SystemRequirement[]
  reviews: Review[]
  links: LinkType[]
  description: string
  about: string
  price: number
}

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/game/${game.id}`}>
      <article className="relative w-[280px] h-[400px] rounded-lg overflow-hidden shadow-xl group">
        <img
          src={game.cover}
          alt={game.name + " cover"}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="relative z-10 flex flex-col justify-between h-full p-2 text-foreground">
          <div className="flex justify-between items-center">
            <span
              className={`${
                game.rating < 50
                  ? "bg-red-500"
                  : game.rating < 75
                    ? "bg-yellow-400"
                    : "bg-green-500"
              } text-header rounded-lg px-3 py-1 text-sm font-semibold shadow`}
            >
              {calculateGameRating(game.rating)}
            </span>
            <Button size="default" variant="outline">
              <Heart size={16} />
            </Button>
          </div>
          <div className="mt-auto bg-background/50 rounded-lg p-2">
            <h3 className="text-2xl font-bold">{game.name}</h3>
            <p className="text-lg text-foreground-secondary">
              {game.developer}
            </p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <p className="text-sm line-through text-foreground-secondary">
                  ${game.price}
                </p>
                <p className="text-lg font-semibold">
                  {calculatePrice(game.price, game.discount)}
                </p>
              </div>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export function DetailedGameCard({ game }: { game: Game }) {
  //TODO if the have has a discount, show it, if not change this

  return (
    <Link href={`/game/${game.id}`}>
      <article className="flex gap-2 rounded-lg shadow-xl bg-card p-4">
        <img
          src={game.cover}
          alt={game.name + " cover"}
          width={150}
          className="rounded-lg"
        />
        <div className="flex flex-col justify-between p-2 text-foreground w-full">
          <div className="flex justify-between items-center">
            <div>
              <span
                className={`${
                  game.rating < 50
                    ? "bg-red-500"
                    : game.rating < 75
                      ? "bg-yellow-400"
                      : "bg-green-500"
                } text-header rounded-lg px-3 py-1 text-sm font-semibold shadow`}
              >
                {calculateGameRating(game.rating)}
              </span>
              <span className="text-foreground-secondary pl-2">
                {game.total_reviews} Reviews
              </span>
            </div>
            <Button size="default" variant="outline">
              <Heart size={16} />
            </Button>
          </div>
          <div className="mt-2 rounded-lg">
            <h3 className="text-2xl font-bold">{game.name}</h3>
            <p className="text-lg text-foreground-secondary">
              {game.developer}
            </p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <span className="bg-accent text-header p-2 rounded-lg font-bold">
                  -{game.discount}%
                </span>
                <div className="flex flex-col items-start pl-2">
                  <p className="text-sm line-through text-foreground-secondary">
                    ${game.price}
                  </p>
                  <p className="text-lg font-semibold">
                    ${calculatePrice(game.price, game.discount)}
                  </p>
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

export function BigGameCard({ game }: { game: Game }) {
  return (
    <Link href={`/game/${game.id}`}>
      <article className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl group p-4">
        <img
          src={game.poster}
          alt={game.name + " poster"}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="relative z-10 flex flex-col justify-between h-full p-2 text-foreground">
          <div className="flex justify-between items-center">
            <span
              className={`${
                game.rating < 50
                  ? "bg-red-500"
                  : game.rating < 75
                    ? "bg-yellow-400"
                    : "bg-green-500"
              } text-header rounded-lg px-3 py-1 text-sm font-semibold shadow`}
            >
              {calculateGameRating(game.rating)}
            </span>
            <Button size="default" variant="outline">
              <Heart size={16} />
            </Button>
          </div>
          <div className="mt-auto bg-background/50 rounded-lg p-2">
            <h3 className="text-2xl font-bold">{game.name}</h3>
            <p className="text-lg text-foreground-secondary">
              {game.developer}
            </p>
            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <p className="text-sm line-through text-foreground-secondary">
                  ${game.price}
                </p>
                <p className="text-lg font-semibold">
                  ${calculatePrice(game.price, game.discount)}
                </p>
              </div>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
