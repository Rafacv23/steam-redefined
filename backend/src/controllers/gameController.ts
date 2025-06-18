import { Request, NextFunction, Response } from 'express'
import gamesJson from '@/data/games.json'
import type { Game } from '@/models/game'

const games = gamesJson as Game[] // ⬅️ Fix here

export const getGames = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(games)
  } catch (error) {
    next(error)
  }
}

//search for games based on his name, publisher etc
export const searchGames = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const query = req.params.query
    if (!query) {
      res.status(400).json({ message: 'Query parameter is required' })
      return
    }
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(query.toLowerCase()),
    )
    res.json(filteredGames)
  } catch (error) {
    next(error)
  }
}

export const getGameById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const game = games.find((game) => game.id === Number(id))
    if (!game) {
      res.status(404).json({ message: 'Game not found' })
      return
    }
    res.json(game)
  } catch (error) {
    next(error)
  }
}

export const getRelatedGames = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const game = games.find((game) => game.id === Number(id))
    if (!game) {
      res.status(404).json({ message: 'Game not found' })
      return
    }
    const relatedGames = games.filter((game) =>
      game.tags.some((tag) => game.tags.includes(tag)),
    )

    // filter to 3 games
    const filteredGames = relatedGames.slice(0, 3)
    res.json(filteredGames)
  } catch (error) {
    next(error)
  }
}
