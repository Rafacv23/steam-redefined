import { Game, GameCard } from "@/components/game-card"
import Carousel from "@/components/carousel"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default async function Home() {
  const games = await fetch("http://localhost:4321/api/games").then((res) =>
    res.json()
  )

  const importantGames = games.filter((game: Game) => game.important)

  return (
    <div className="flex flex-col min-h-screen items-center rounded-lg pb-20 sm:py-20 bg-gradient-to-b from-header to-primary/30">
      <main className="flex max-w-5xl mx-auto flex-col items-center sm:items-start">
        <Carousel games={importantGames} />
        <section className="mt-8">
          <header className="flex justify-between items-center">
            <h2 className="text-xl font-bold mb-4">Popular Games</h2>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/search/minecraft"
            >
              See more
            </Link>
          </header>
          <div className="gap-8 mt-4 justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game: Game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
