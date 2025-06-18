import { Game } from "@/components/game-card"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculatePrice(price: number, discount: number): number {
  if (discount <= 0) return price
  const discountedPrice = price - (price * discount) / 100

  // filter to 2 digits after the decimal point
  return Number(discountedPrice.toFixed(2))
}

export function calculateGameRating(rating: number): string {
  if (rating >= 90) return "Overwhelming Positive"
  if (rating >= 80) return "Very Positive"
  if (rating >= 65) return "Mostly Positive"
  if (rating >= 50) return "Mixed"
  return "Negative"
}

export function deleteRecentSearch(query: string) {
  const stored = localStorage.getItem("recentSearchs")
  if (stored) {
    const recentSearchs = JSON.parse(stored)
    const updatedSearches = recentSearchs.filter((q: string) => q !== query)
    localStorage.setItem("recentSearchs", JSON.stringify(updatedSearches))
  }
}

export function copyToClipboard(text: string) {
  const start = window.location.origin
  const destination = `${start}/search/${text}`
  navigator.clipboard.writeText(destination)
}

export function addGameToWhislist(game: Game) {
  const whislist = localStorage.getItem("whislist")
  if (whislist) {
    const whislistGames = JSON.parse(whislist)
    whislistGames.push(game)
    localStorage.setItem("whislist", JSON.stringify(whislistGames))
  } else {
    localStorage.setItem("whislist", JSON.stringify([game]))
  }
}
