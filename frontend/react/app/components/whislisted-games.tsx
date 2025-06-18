"use client"

import { DetailedGameCard, Game } from "./game-card"

export default function WhislistedGames() {
  const whislistedGames = localStorage.getItem("whislist")
  const whislistGames: Game[] = whislistedGames
    ? JSON.parse(whislistedGames)
    : []

  return (
    <ul className="flex flex-col gap-4 w-full">
      {whislistGames.map((game) => (
        <DetailedGameCard key={game.id} game={game} />
      ))}
    </ul>
  )
}
