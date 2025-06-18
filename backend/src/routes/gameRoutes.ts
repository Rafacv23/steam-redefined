import { Router } from 'express'
import {
  getGames,
  getGameById,
  getRelatedGames,
  searchGames,
} from '@/controllers/gameController'

const router = Router()

router.get('/', getGames)
router.get('/:id', getGameById)
router.get('/related/:id', getRelatedGames)
router.get('/search/:query', searchGames)

export default router
