"use client"
import Button from "@/components/ui/button"
import { addGameToWhislist } from "../../lib/utils"
import { Game } from "./game-card"

//is a button but for the client

interface ClientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  game: Game
  variant: "default" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
}

export function WhislistBtn({
  children,
  game,
  variant = "default",
  size = "default",
}: ClientButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => addGameToWhislist(game)}
    >
      {children}
    </Button>
  )
}

export function CartBtn({
  children,
  game,
  variant = "default",
  size = "default",
}: ClientButtonProps) {
  return (
    <Button variant={variant} size={size}>
      {children}
    </Button>
  )
}
