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
  if (rating >= 50) return "Mixed"
  if (rating >= 65) return "Mostly Positive"
  if (rating >= 80) return "Very Positive"
  if (rating >= 90) return "Overwhelming Positive"
  return "Negative"
}
