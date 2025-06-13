export interface Game {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export let games: Game[] = []
