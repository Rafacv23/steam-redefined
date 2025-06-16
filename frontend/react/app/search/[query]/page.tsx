import { GameCard } from "@/components/game-card"

export default async function SearchPage({
  params,
}: {
  params: { query: string }
}) {
  const { query } = await params

  return (
    <div className="flex flex-col min-h-screen items-center rounded-lg pb-20 sm:py-20 bg-gradient-to-b from-header to-primary/30">
      <main className="flex max-w-5xl mx-auto flex-col items-center sm:items-start">
        <h1 className="text-2xl font-bold mb-4">Results for {query}</h1>
        <div className="gap-8  justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
