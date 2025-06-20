import { Game, GameCard } from "@/components/game-card"
import Badge from "@/components/ui/badge"
import Button from "@/components/ui/button"
import YouTubeVideo from "@/components/ui/youtube-video"
import { Heart, ShoppingCart, User } from "lucide-react"
import { Metadata } from "next"
import { calculateGameRating, calculatePrice } from "../../../lib/utils"
import Link from "next/link"
import { WhislistBtn } from "@/components/client-btns"

export async function generateMetadata({
  params,
}: {
  params: { id: string | number }
}): Promise<Metadata> {
  const { id } = params
  return {
    title: `${id} on Steam`,
    description: "Generated by create next app",
  }
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string | number }>
}) {
  const { id } = await params

  const game: Game = await fetch(`http://localhost:4321/api/games/${id}`).then(
    (res) => res.json()
  )

  const relatedGames: Game[] = await fetch(
    `http://localhost:4321/api/games/related/${id}`
  ).then((res) => res.json())

  // TODO call the api to fetch the game data and make a loading.ts page inside this route

  return (
    <main className="flex flex-col min-h-screen items-center rounded-lg pb-20 sm:py-10 bg-gradient-to-b from-header to-primary/30">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between w-full items-center mb-8">
          <h1 className="text-4xl font-bold">{game.name}</h1>
          <WhislistBtn
            aria-label="Add to whislist"
            game={game}
            variant="default"
          >
            Whislist
            <Heart size={16} />
          </WhislistBtn>
        </header>
        <main className="grid grid-cols-5 gap-8 mb-8">
          <section className="col-span-3">
            <YouTubeVideo videoId={game.trailer} />
            <section
              id="base-game"
              className="flex justify-between items-center gap-4 mt-4 bg-card p-4 rounded-lg"
            >
              <div>
                <p className="font-semibold">{game.name}</p>
                <p className="text-secondary text-sm">
                  Special offer ends in 19 October
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-accent text-header p-2 rounded-lg font-bold">
                  -{game.discount}%
                </span>
                <div className="flex flex-col font-semibold">
                  <span className="line-through text-foreground/60">
                    ${game.price}
                  </span>
                  <span color="text-accent">
                    ${calculatePrice(game.price, game.discount)}
                  </span>
                </div>
                <Button>
                  Add to cart <ShoppingCart size={18} />
                </Button>
              </div>
            </section>
            {game.dlcs.map((dlc) => (
              <div
                key={dlc.name}
                className="gap-4 mt-4 bg-card p-4 rounded-lg space-y-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{dlc.name}</p>
                    <p className="text-secondary text-sm">
                      Special offer ends in 19 October
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-accent text-header p-2 rounded-lg font-bold">
                      -{game.discount}%
                    </span>
                    <div className="flex flex-col font-semibold">
                      <span className="line-through text-foreground/60">
                        ${dlc.price}
                      </span>
                      <span color="text-accent">
                        ${calculatePrice(dlc.price, game.discount)}
                      </span>
                    </div>
                    <Button>
                      Add to cart <ShoppingCart size={18} />
                    </Button>
                  </div>
                </div>
                {dlc.content && (
                  <div className="p-4 rounded-lg bg-header text-sm">
                    <p className="text-foreground/60">Includes</p>
                    <ul>
                      {dlc.content.map((content) => (
                        <li key={content}>{content}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <section className="bg-card p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-xl mb-2">About {game.name}</h4>
              <p className="text-sm text-foreground">{game.about}</p>
            </section>
            <section className="bg-card p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-xl mb-2">
                System Requirements
              </h4>
              <ul className="flex flex-col gap-2">
                {game.system_requiremens.map((requirement) => (
                  <li
                    className="flex items-center gap-2 text-secondary bg-header p-2 rounded-lg"
                    key={requirement.name}
                  >
                    <span className="text-secondary">{requirement.name}</span>
                    <span className="text-foreground-secondary pl-2">
                      {requirement.value}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </section>
          <section className="col-span-2">
            <img className="rounded-lg mb-4" src={game.poster} />
            <p className="mb-4">{game.description}</p>
            <p>
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
            </p>
            <p className="text-foreground-secondary my-4">
              Release Date
              <span className="text-secondary pl-2">{game.released}</span>
            </p>
            <p className="text-foreground-secondary my-4">
              Developer
              <span>
                <span className="text-secondary pl-2">{game.developer}</span>
              </span>
            </p>
            <p className="text-foreground-secondary my-4">
              Publisher
              <span>
                <span className="text-secondary pl-2">{game.publisher}</span>
              </span>
            </p>
            <h4 className="text-foreground-secondary">Popular tags</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {game.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <section className="bg-card p-4 rounded-lg mt-4">
              <h4 className="text-foreground-secondary mb-2">Features</h4>
              <ul className="flex flex-col gap-2">
                {game.features.map((feature) => (
                  <li
                    className="flex items-center gap-2 text-secondary bg-header p-2 rounded-lg"
                    key={feature}
                  >
                    <User size={16} /> {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section className="bg-card p-4 rounded-lg mt-4">
              <h4 className="text-foreground-secondary mb-2">Languages</h4>
              <ul className="flex flex-col gap-2">
                {game.languages.map((language) => (
                  <li
                    className="flex items-center gap-2 text-secondary bg-header p-2 rounded-lg"
                    key={language}
                  >
                    <User size={16} /> {language}
                  </li>
                ))}
              </ul>
            </section>
            <section className="bg-card p-4 rounded-lg mt-4">
              <h4 className="text-foreground-secondary mb-2">
                Steam Deck Support
              </h4>
              <p className="text-secondary">{game.steam_deck}</p>
            </section>
            <section id="links" className="bg-card p-4 rounded-lg mt-4">
              <h4 className="text-foreground-secondary mb-2">Links</h4>
              <ul className="flex flex-col gap-2">
                {game.links.map((link) => (
                  <li
                    key={link.name}
                    className="flex items-center gap-2 text-secondary bg-header p-2 rounded-lg"
                  >
                    <Link
                      title={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </main>
        <section>
          <h2 className="text-xl font-bold mb-4">Related Games</h2>
          <div className="flex flex-wrap gap-4 max-w-4xl items-center">
            {relatedGames.map((game) => (
              <div key={game.id}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </section>
        <section id="comments" className="bg-card p-4 rounded-lg mt-4">
          <h2 className="text-xl font-bold mb-4">
            User reviews for {game.name}
          </h2>
          <ul className="flex flex-col gap-4">
            {game.reviews.map((review) => (
              <li
                key={review.author}
                className="flex flex-col gap-2 bg-header rounded-lg p-4 shadow-xl"
              >
                <h5>{review.author}</h5>
                <p>{review.comment}</p>
                <p className="text-secondary">
                  {review.date} • {review.rating} • {review.hours} hours
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
