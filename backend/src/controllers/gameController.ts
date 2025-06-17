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
