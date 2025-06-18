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
  price: number
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

export let games: Game[] = []
